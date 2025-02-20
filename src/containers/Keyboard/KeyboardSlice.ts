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
      console.log(state.value)
    }
  }
});

export const keyboardReducer = KeyboardSlice.reducer;
export const { add } = KeyboardSlice.actions;