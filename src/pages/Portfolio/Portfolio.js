import React, { useState } from 'react';
import './Portfolio.css';
import { CardActionArea, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ResumeData from '../../utils/ResumeData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Portfolio = () => {
  const [tabValue, setTabvalue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);


  return (
    <Grid container className='section pb_45 '>
      {/* Title */}
      <Grid item className='section_title mb_30' >
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='customTabs'
          onChange={(event, newvalue) => setTabvalue(newvalue)}>
          <Tab
            label='All'
            value='All'
            className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />

          {[...new Set(ResumeData.projects.map(item => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={tabValue == tag ? 'customTabs_item active' : 'customTabs_item'}
            />
          ))}
        </Tabs>

      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2} className=''>
          {ResumeData.projects.map(project => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia variant={'body2'} className='customCard_image' image={project.image} title={project.title} />
                        <CardContent>
                          <Typography className='customCard_title'>{project.title}</Typography>
                          <Typography variant='caption' className='customCard_caption'>{project.caption}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>


      <Dialog className='projectDialog' open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
        <img src={projectDialog.image} alt='' className='projectDialog_image' />
        <DialogContent>
          <Typography className='projectDialog_description'>
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialog?.link?.map((link) => (
            <a
              href={projectDialog.title === 'In Progress' ? undefined : link.link} // Disable the link
              target='_blank'
              className='projectDialog_icon'
              style={{ pointerEvents: projectDialog.title === 'In Progress' ? 'none' : 'auto', opacity: projectDialog.title === 'In Progress' ? 0.5 : 1 }} // Style to indicate disable
              key={link.link} // Ensure to add a key
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>



    </Grid>
  )
}

export default Portfolio