import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useEffect, useState } from 'react';
import {positionStyle} from './style'
import MainButton from '../components/MainButton';
import FullScreenDialog from '../components/FullScreenDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupQuestionare() {
    const [open, setOpen] = useState(false);
    const [openSecondModal, setOpenSecondModal] = React.useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpenSecondModal = () => {
        setOpenSecondModal(true);
    }
    const handleCloseSecondModal = () => {
        setOpenSecondModal(false);
        setOpen(false);
    }
  
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{textTransform:'uppercase'}}>{"Чи ІТ то твоє?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={positionStyle}>
            Пройди тест та дізнайся чи підходить тобі робота в ІТ сфері?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <MainButton text='Закрити' onClickHandler={handleClose}/>
            <MainButton text='Пройти' onClickHandler={handleClickOpenSecondModal}/>
        </DialogActions>
      </Dialog>
      <FullScreenDialog open={openSecondModal} handleClose={handleCloseSecondModal}/>
    </>
  );
}