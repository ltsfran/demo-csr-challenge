import { UserDTO } from '@app/client/src/views/Login/loginForm/dtos';
import { UserModel } from '@app/client/src/views/Login/loginForm/models'; 

export const hydrateUser = (data: UserDTO): UserModel => {
  const dataHydrate: UserModel = {
    code: data.code,
    message: data.message,
    user: data.data
  };

  return dataHydrate;
};