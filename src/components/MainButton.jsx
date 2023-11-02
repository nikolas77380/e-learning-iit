import * as React from 'react';
import Button from '@mui/material/Button';

export default function MainButton({text, onClickHandler, width, height}) {
  const buttonStyles = {
    backgroundColor: '#E8511C',
    fontFamily: 'Roboto',
    fontSize: '30px',
    color: 'white',
    borderRadius:'0',
    boxShadow:'0px 4px 4px 0px #00000040',
    fontWeight: '600',
    lineHeight: '23px',
    textAlign: 'center',
    letterSpacing: '0em',
    padding:'27px',
    height:height,
    width:width,
  };

  return (
      <Button 
        variant="contained" 
        style={buttonStyles} 
        onClick={onClickHandler}
        >
          {text}
      </Button>
  );
}