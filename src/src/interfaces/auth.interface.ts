export interface UserAuth {
  userId: number;
  customerId: string | null;
  avatar: string;
  username: string;
  names: string;
  surnames: string;
  email: string;
  groups: string[];
  phone: string;
  role: string;
}

export interface AuthState {
  user: UserAuth | null;
}
