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
    console.log('llega 1', values);
    try {
      const data = await userService.getData(values);
      dispatch(fetchUserSuccess(data));
    } catch(error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};