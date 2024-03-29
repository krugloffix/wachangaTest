import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import SelectedSlice from './SelectedSlice';

export const store = configureStore({
  reducer: {
    selected: SelectedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
