import { AxiosPromise } from 'axios';
import { ILoginRequest, ILoginResponse } from './types';
import { axiosInstance } from "../axios-instance";
import Endpoints from '../endpoints';

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);  

export const refreshToken = (): AxiosPromise<ILoginResponse> => axiosInstance.get(Endpoints.AUTH.REFRESH);  
  
export const logout = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.LOGOUT); 

export const getProfile = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.PROFILE);
