import axios from 'axios';
import { store } from '../store';
import { getAccessToken, logoutUser } from './../store/actions/action-creator';
import Endpoints from './endpoints';

export const axiosInstance = axios.create({});

const urlsSkipAuth = [Endpoints.AUTH.LOGIN, Endpoints.AUTH.LOGOUT, Endpoints.AUTH.REFRESH];

axiosInstance.interceptors.request.use(async (config) => {
  if (config.url && urlsSkipAuth.includes(config.url)) {
    return config;
  }

  const accessToken = await store.dispatch(getAccessToken);

  if (accessToken) {
    const authorization = `Bearer ${accessToken}`;

    config.headers = {
      ...config.headers,
      authorization: authorization,
    }
  }

  return config;
});
