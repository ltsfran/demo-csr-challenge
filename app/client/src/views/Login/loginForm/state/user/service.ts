import { axiosAjax } from '@app/client/src/config/axios';
import { HttpResponseError } from '@app/client/src/utils/exceptions';
import { hydrateUser } from './hydrator';

export const userService = {
  async getData(values) {
    try {
      const { data } = await axiosAjax.post(process.env.API_USER, values);
      return hydrateUser(data);
    } catch(error) {
      throw new HttpResponseError(error);
    }
  }
};