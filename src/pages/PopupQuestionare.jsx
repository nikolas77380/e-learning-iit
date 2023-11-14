import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useEffect, useState } from 'react';
import {titleStyle, titleStyle2, nameStyle, positionStyle, paragrfStyle, shadowContainerStyle, gridTitleStyle} from './style'
import MainButton from '../components/MainButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupQuestionare() {
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <React.Fragment>
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
            <MainButton text='Пройти' onClickHandler={handleClose}/>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}