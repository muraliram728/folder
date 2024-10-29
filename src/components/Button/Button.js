import React from 'react';
import Button from '@mui/material/Button';
import './Button.css';


const CustomButton = ({onClick, text, icon }) => {
  return (
    <Button
      className='custom_btn'
      endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}
      onClick={onClick}
      >
      <span className='btn_text'>{text}</span>
    </Button>
  );
}

export default CustomButton;