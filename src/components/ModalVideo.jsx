import React from "react";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ModalVide({videoid, open, handleClose}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        position:'relative'
      };

    return(
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    > 
        <Box sx={style}>
            <Button aria-label="close" color="primary" style={{position:'absolute', top:'0', right:'0'}} onClick={handleClose}>
                <CloseIcon />
            </Button>
            <iframe className="video"   title="youtube video"
                    src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
                    frameBorder="0" allowFullScreen  width='640px' height='360px' />
        </Box>
    </Modal>
    )
}
