import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
// import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent, {
//   timelineOppositeContentClasses,
// } from '@mui/lab/TimelineOppositeContent';
import ExperienceCard from './Cards/ExperienceCard';
import { experienceData } from '../../../Data/experience';


const ExperienceSection = () => {
  const theme = useTheme();
  return (
    <>
      <Box className='experience-section'>
        <Typography variant='caption' component={'div'} textAlign={'center'} color={'gray'} mb={0.5} >Internships & Jobs</Typography>

        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            '&.MuiTimeline-root': {
              p: 0,
              pl: 2,
              mt: 0,
              '& .MuiTimelineContent-root': {
                pr: 0
              }
            }
          }}
        >
          {
            experienceData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{
                    backgroundColor: 'mypresetcolor.highlightColor',
                    boxShadow: index === 0 && `1px 1px 5px ${theme.palette.mypresetcolor.highlightColor},
                            -1px -1px 5px ${theme.palette.mypresetcolor.highlightColor}`
                  }} />
                  {index < experienceData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard data={item} />
                </TimelineContent>
              </TimelineItem>
            ))
          }
        </Timeline>
      </Box>
    </>
  )
}

export default ExperienceSection;