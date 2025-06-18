import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './redux/PasteSlice';

export const store = configureStore({
  reducer: {
    paste: pasteReducer, // ← Use your real reducer
  },
});
