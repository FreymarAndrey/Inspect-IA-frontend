import { createContext } from "react";
import { IDialog, Toast, UIState } from "src/interfaces";

export type UIContextProps = {
  uiState: UIState;
  setToast: (toast: Toast | null) => void;
  setDialog: (dialog: IDialog | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export const UIContext = createContext<UIContextProps>({} as UIContextProps);
