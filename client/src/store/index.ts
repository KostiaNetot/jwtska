import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";
import { useDispatch } from "react-redux";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// reusable types resolver hook:
export const useAppDispatch: () => AppDispatch = useDispatch;