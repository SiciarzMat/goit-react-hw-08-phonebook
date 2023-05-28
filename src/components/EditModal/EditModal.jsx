import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SelectIsModalShown, SelectOpenedContact } from 'redux/selectors';
import {
  editOpenedContactAction,
  resetOpenedContactAction,
  showHideModalAction,
} from 'redux/modal/modalSlice';
import { createPortal } from 'react-dom';
import { Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { editContactAction } from 'redux/contacts/contactOperations';
import css from './EditModal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const modalRoot = document.querySelector('#modal-root');

export const EditModal = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showHideModalAction());
    dispatch(resetOpenedContactAction());
  };
  const handleChange = event => {
    const payload = { name: event.target.name, value: event.target.value };
    dispatch(editOpenedContactAction(payload));
  };
  const contact = useSelector(SelectOpenedContact);

  const isModalShown = useSelector(SelectIsModalShown);

  const handleEditedSubmit = event => {
    event.preventDefault();
    dispatch(editContactAction(contact));
    dispatch(showHideModalAction());
    dispatch(resetOpenedContactAction());
  };

  return createPortal(
    <div>
      <Modal
        open={isModalShown}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please edit your contact:
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            onSubmit={handleEditedSubmit}
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              value={contact.name}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              type="tel"
              label="number"
              name="number"
              variant="outlined"
              value={contact.number}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit" className={css.btn}>
              <SaveIcon className={css.icon} />
              Save contact
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>,
    modalRoot
  );
};
