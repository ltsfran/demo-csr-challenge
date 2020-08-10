import * as actionTypes from './actionTypes';
import { userService } from './service';
import { UserModel } from '../../models';

const fetchUserRequest = () => ({
  type: actionTypes.FETCH_USER_REQUEST
});

const fetchUserFailure = (errorMessage: string) => ({
  type: actionTypes.FETCH_USER_FAILURE,
  errorMessage
});

const fetchUserSuccess = (data: UserModel) => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  data
});

export const fetchUser = (values, history) => {
  return async dispatch => {
    dispatch(fetchUserRequest());
    try {
      const data = await userService.getData(values);
      dispatch(fetchUserSuccess(data));
      sessionStorage.setItem('name', data.user.user.name);
      sessionStorage.setItem('token', data.user.user.token);
      history.push('/createitem');
    } catch(error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};