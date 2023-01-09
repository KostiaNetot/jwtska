import { AppDispatch } from './../index';
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { createBrowserHistory } from "@remix-run/router";
import { AxiosPromise } from "axios"
import api from "../../api";
import { ILoginRequest, ILoginResponse } from "../../api/auth/types"
import { store } from "..";
import { loginStart, loginSuccess, loginFailure, logoutSuccess, loadProfileStart, loadProfileSuccess, loadProfileFailure } from "../reducers/auth-reducer";
import { isTokenExpired } from "../../utils/jwt";


const history = createBrowserHistory();

export const loginUser = (data: ILoginRequest) => 
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(loginStart());
      const res = await api.auth.login(data);
      dispatch(loginSuccess(res.data.accessToken));
      dispatch(getProfile());
    } catch (err: any) {
      console.error(err);          
      dispatch(loginFailure(err.message));
    }
  }    

export const logoutUser = () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      await api.auth.logout();
      dispatch(logoutSuccess());
      history.push('/');
    } catch (e) {
      console.error(e)
    }
}

export const getProfile = () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart());
      const res = await api.auth.getProfile();
      dispatch(loadProfileSuccess(res.data));
    } catch (err: any) {
      console.error(err);
      dispatch(loadProfileFailure(err.message));
    }
  }

  let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null

  export const getAccessToken =
    () =>
    async (dispatch: Dispatch<any>): Promise<string | null> => {
        try {
            const accessToken = store.getState().auth.authData.accessToken

            if (!accessToken || isTokenExpired(accessToken)) {
              if (refreshTokenRequest === null) {
                  refreshTokenRequest = api.auth.refreshToken()
              }

              const res = await refreshTokenRequest
              refreshTokenRequest = null

              dispatch(loginSuccess(res.data.accessToken))

              return res.data.accessToken
            }
            
            return accessToken
        } catch (e) {
            console.error(e)

            return null
        }
    }

