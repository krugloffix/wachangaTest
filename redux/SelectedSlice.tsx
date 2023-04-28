import {createSlice} from '@reduxjs/toolkit';

const initialState: {selectedItem: string} = {
  selectedItem: '0',
};

const SelectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const {setItem} = SelectedSlice.actions;
export default SelectedSlice.reducer;
