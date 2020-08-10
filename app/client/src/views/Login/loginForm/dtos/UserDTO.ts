interface User {
  id?: number;
  email?: string;
  name?: string;
  token?: string;
}

interface UserData {
  user: User;
}

export interface UserDTO {
  code: number;
  message: string;
  data: UserData;
}