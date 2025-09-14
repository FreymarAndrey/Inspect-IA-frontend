import { IDialog, Toast, UIState } from "src/interfaces";

type UIAction =
  | { type: "setToast"; payload: Toast | null }
  | { type: "setDialog"; payload: IDialog | null }
  | { type: "setIsAuthenticated"; payload: boolean };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "setToast":
      return {
        ...state,
        toast: action.payload,
      };
    case "setDialog":
      return {
        ...state,
        dialog: action.payload,
      };
    case "setIsAuthenticated":
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    default:
      return state;
  }
};
