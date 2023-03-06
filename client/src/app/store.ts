import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import planesSlice from './../features/planes/planesSlice';
import planeSlice from './../features/plane/planeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    planes: planesSlice,
    plane: planeSlice,
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
