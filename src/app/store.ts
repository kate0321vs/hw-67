import { configureStore } from "@reduxjs/toolkit";
import { keyboardReducer } from '../containers/Keyboard/KeyboardSlice.ts';

export const store = configureStore( {
  reducer: {
    keyboard: keyboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

