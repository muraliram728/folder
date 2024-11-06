import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css';
import CustomTimeLine, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Button from '../Button/Button';
import ResumeData from '../../utils/ResumeData';
import { TimelineItem, TimelineContent } from '@mui/lab';
// import GetAppIcon from '@mui/icons-material/GetApp';
import GetAppSharpIcon from '@mui/icons-material/GetAppSharp';
import '../Timeline/Timeline.css';

const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content' >
      {link ? (
        <Typography className='timeline_text'>
          <span >{title}:</span>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timeline_text'>
          <span>{title}</span>
          <span>{text}</span>
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);



const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{ResumeData.name}</Typography>
        <Typography className='title'>{ResumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assets/images/profileImg.jpeg')} />
      </figure>

      <div className='profile_information'>
        <CustomTimeLine icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title='Name:' text={ResumeData.name} />
          <CustomTimeLineItem title='Title:' text={ResumeData.title} />
          <CustomTimeLineItem title='Email:' text={ResumeData.email} />

          {Object.keys(ResumeData.socials).map(key => (
            <CustomTimeLineItem
              title={key}
              text={ResumeData.socials[key].text}
              link={ResumeData.socials[key].link}
            />
          ))}
        </CustomTimeLine>

        <div className='button_container'>
          <a href={`${process.env.PUBLIC_URL}/Murali Ram_ Resume .pdf.pdf`} download>
            <Button text={'Download CV'} icon={<GetAppSharpIcon />} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
