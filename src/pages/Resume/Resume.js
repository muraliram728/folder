import React from 'react';
import './Resume.css';
import ResumeData from '../../utils/ResumeData';
import { Container, Grid, Paper, TextField, Typography } from '@mui/material';
import CustomTimeLine, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab';
import CustomButton from '../../components/Button/Button';
import '../../components/Timeline/Timeline.css';


const Resume = () => {



  const handleSubmit = () => {
      alert('Form Submitted Successfully')
  }


  return (

    <>
      {/* About Me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item className='section_title' xs={12}>
          <Typography variant='body2' className='aboutme_text'>{ResumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education & Experiances */}
      <Grid container className='section'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resumeTimeline'>
            {/* Experiances */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Work Experians' icon={<WorkIcon />}>
                {ResumeData.Experiences.map(Experiance => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography className='timeline_companyname'>{Experiance.companyName}</Typography>
                      <Typography className='timeline_title'>{Experiance.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{Experiance.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{Experiance.description}</Typography>

                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>


            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Educations' icon={<SchoolIcon />}>
                {ResumeData.Educations.map(Education => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography className='timeline_degree'>{Education.degree}</Typography>
                      <Typography className='timeline_institution'>{Education.institution}</Typography>
                      <Typography variant='caption' className='timeline_date'>{Education.completionDate}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid item className='section_title' style={{ marginBottom: '15px' }} >
        <span></span>
        <h6 className='section_title_text'>Skills</h6>
      </Grid>
      <Grid container spacing={3} justifyContent="space-between" className='section graybg pb_45 '>
        {ResumeData.Skills.map((skill) => (
          <Grid item sx={12} sm={6} md={3}>
            <Paper elevation={0} className='skills'>
              <Typography variant='h6' className='skills_title'>
                {skill.title}
              </Typography>
              {skill.description.map(element => (
                <Typography variant='body2' className='skill_description'>
                  <TimelineDot variant={'putlined'} className='timeline_dot' />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact */}
      <Grid container spacing={5} className='section'>
        {/* contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title'>
              <span></span>
              <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
          </Grid>

          <Grid item >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField id="standard-basic" label="Name" variant="standard" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="standard-basic" label="Email" variant="standard" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="standard-basic" label="Message" variant="standard" />
              </Grid>
              <Grid item xs={12} style={{ paddingTop: '10px' }}>
                <CustomButton text={'Submit'} onClick={handleSubmit}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container >
            <Grid item className='section_title' style={{ marginBottom: '15px' }}>
              <span></span>
              <h6 className='section_title_text'>Contact information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item >
                  <Typography className='contactinfo_item'>
                    <span>Address :</span> {ResumeData.address}
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography className='contactinfo_item'>
                    <span>Phone :</span> {ResumeData.phone}
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography className='contactinfo_item'>
                    <span>Email :</span> {ResumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} className='contactinfo_socialsContainer'>
              <Grid item xs={12} display={'flex'} >
                {Object.keys(ResumeData.socials).map(key => (
                  <Grid item  className='contactinfo_socials'>
                    <a href={ResumeData.socials[key].link} target='_blank'>{ResumeData.socials[key].icon}</a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Resume