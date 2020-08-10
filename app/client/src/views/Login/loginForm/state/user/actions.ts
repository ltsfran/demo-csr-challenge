import * as actionTypes from './actionTypes';
import { userService } from './service';

const fetchUserRequest = () => ({
  type: actionTypes.FETCH_USER_REQUEST
});

const fetchUserFailure = (errorMessage: string) => ({
  type: actionTypes.FETCH_USER_FAILURE,
  errorMessage
});

const fetchUserSuccess = (data) => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  data
});

export const fetchUser = (values) => {
  return async dispatch => {
    dispatch(fetchUserRequest());
    try {
      const data = await userService.getData(values);
      dispatch(fetchUserSuccess(data));
    } catch(error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};