import { AxiosPromise } from 'axios';
import { ILoginRequest, ILoginResponse } from './types';
import { axiosInstance } from "../axios-instance";
import Endpoints from '../endpoints';

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);    
