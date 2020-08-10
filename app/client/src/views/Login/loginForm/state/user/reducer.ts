import * as actionTypes from './actionTypes';
import { UserModel } from '@app/client/src/views/Login/loginForm/models';

export interface State {
  data: UserModel;
  isFetching: boolean;
  errorMessage: string;
}

const initialState: State = {
  data: {
    code: null,
    message: '',
    user: {
      user: {}
    }
  },
  isFetching: false,
  errorMessage: ''
};

export const user = (state: State = initialState, action): State => {
  switch(action.type) {
    case actionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        errorMessage: ''
      };
    default:
      return state;
  }
};