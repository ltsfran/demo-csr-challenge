import React from 'react';
import { LoginFormFeature } from './loginForm';
import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {
  const history = useHistory();
  return(
    <LoginFormFeature history={history} />
  );
};

Login.displayName = 'Login';