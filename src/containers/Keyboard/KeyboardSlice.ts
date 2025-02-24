import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IKeyboardState {
  value: string
}

const initialState: IKeyboardState = {
  value: '',
}

export const KeyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (state.value.length === 4) return
      state.value += action.payload;
    },
    remove: (state) => {
      state.value = state.value.slice(0, state.value.length - 1);
    },
    check: (state) => {
      const pinCode = '2835';
      if (state.value === pinCode) {
        state.value = 'Access Granted!';
      } else {
        state.value = 'Access Denied!';
      }
    }
  }
});

export const keyboardReducer = KeyboardSlice.reducer;
export const { add, remove, check  } = KeyboardSlice.actions;