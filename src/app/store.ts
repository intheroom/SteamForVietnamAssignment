import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import albumReducer from '../providers/album/provider'
import userReducer from '../providers/user/provider'

export const store = configureStore({
  reducer: {
    album: albumReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
