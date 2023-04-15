import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  text: ''
}

export const modalSlice = createSlice({
  name: 'modal', // a slice name
  initialState, // reducer initial state
  reducers: {
    toggleModal: state => {
      state.isOpen = !state.isOpen
    } 
  } // object - case reducers
})

export const { toggleModal } = modalSlice.actions;
export const isOpen = state => state.modal.isOpen;
export default modalSlice.reducer;
