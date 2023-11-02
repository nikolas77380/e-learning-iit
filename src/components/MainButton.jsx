import * as React from 'react';
import Button from '@mui/material/Button';

export default function MainButton({buttonText, onClickHandler}) {
  const buttonStyles = {
    backgroundColor: '#E8511C',
    color: 'white',
    borderRadius:'0',
    boxShadow:'0px 4px 4px 0px #00000040',
    fontWeight: '600',
    lineHeight: '23px',
    textAlign: 'center'
  };

  return (
      <Button 
        variant="contained" 
        style={buttonStyles} 
        onClick={onClickHandler}
        >
          {buttonText}
      </Button>
  );
}