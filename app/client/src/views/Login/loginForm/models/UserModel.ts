interface User {
  id?: number;
  email?: string;
  name?: string;
  token?: string;
}

interface UserData {
  user: User;
}

export interface UserModel {
  code: number;
  message: string;
  user: UserData;
}