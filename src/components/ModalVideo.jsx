import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

export default function BasicModal({videoid, handler}) {
  

  return (
    <Box sx={style}>
       <IconButton aria-label="close" color="primary" style={{position:'absolute', top:'0', right:'0'}} onClick={handler}>
          <CloseIcon />
        </IconButton>
        <iframe className="video"   title="youtube video"
                src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
                frameborder="0" allowFullScreen  width='640px' height='360px' />
    </Box>
  );
}