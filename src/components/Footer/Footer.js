import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';
import ResumeData from '../../utils/ResumeData';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_left'>
              <Typography className='footer_name'>
                    {ResumeData.name}
              </Typography>
        </div>
        <div className='footer_right'>
                <Typography className='footer_copyright'>
                      Designed And Developed by <a href='/' target='_blank'>Murali Ram</a>
                      <br />
                      clone idea from <a href='https://themeforest.net/category/site-templates/creative' target='_blank'>Travonline</a>
                </Typography>
        </div>

    </div>
  )
}

export default Footer