import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalShown: false,
  openedContact: {
    id: '',
    name: '',
    number: '',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showHideModalAction: state => {
      state.isModalShown = !state.isModalShown;
    },

    setOpenedContactAction: (state, action) => {
      state.openedContact = action.payload;
    },
    editOpenedContactAction: (state, action) => {
      const { name, value } = action.payload;
      state.openedContact[name] = value;
    },
    resetOpenedContactAction: state => {
      state.openedContact = { id: '', name: '', number: '' };
    },
  },
});

export const {
  showHideModalAction,
  setOpenedContactAction,
  editOpenedContactAction,
  resetOpenedContactAction,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
