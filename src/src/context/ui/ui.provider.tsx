import { useReducer } from "react";
import { IDialog, Toast, UIState } from "src/interfaces";
import { uiReducer } from "./ui.reducer";
import { UIContext } from "./ui.context";
import { CustomStorage } from "src/lib";

const INITIAL_STATE: UIState = {
  toast: null,
  dialog: null,
  isAuthenticated: CustomStorage.token.length > 0,
};

interface Props {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: Props) => {
  const [uiState, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const setToast = (toast: Toast | null) => {
    dispatch({ type: "setToast", payload: toast });
  };

  const setDialog = (dialog: IDialog | null) => {
    dispatch({ type: "setDialog", payload: dialog });
  };

  const setIsAuthenticated = (isAuthenticated: boolean) => {
    dispatch({ type: "setIsAuthenticated", payload: isAuthenticated });
  };

  return (
    <UIContext.Provider
      value={{
        uiState,
        setToast,
        setDialog,
        setIsAuthenticated,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
