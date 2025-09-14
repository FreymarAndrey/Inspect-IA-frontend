export interface UIState {
  toast: Toast | null;
  dialog: IDialog | null;
  isAuthenticated: boolean;
}

export interface Toast {
  type: string;
  title: string;
  message: string;
  duration: number;
}

export interface IDialog {
  icon: string;
  title: string;
  message: string;
}
