import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { ILoginRequest } from "../../api/auth/types";
import { loginStart, loginSuccess, loginFailure } from "../reducers/auth-reducer";

export const loginUser = 
  (data: ILoginRequest) => 
    async (dispatch: Dispatch): Promise<void> => {
      try {
        dispatch(loginStart());

        const res = await api.auth.login(data);

        dispatch(loginSuccess(res.data.accessToken));
      } catch (err: any) {
        console.error(err);
            
        dispatch(loginFailure(err.message));
      }
    }
