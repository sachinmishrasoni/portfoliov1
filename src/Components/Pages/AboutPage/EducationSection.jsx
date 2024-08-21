import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
// import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FaCheck } from "react-icons/fa6";
import { educationData } from '../../../Data/education';
import EducationCard from './Cards/EducationCard';

const EducationSection = () => {
    const theme = useTheme();
    return (
        <>
            <Box className='education-section' sx={{ height: '100%', backgroundColor: '', position: 'relative' }}>
                <Typography variant='caption' component={'div'} textAlign={'center'} color={'gray'} mb={0.5} >Degree & Courses</Typography>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                        '& .MuiTimelineDot-root': {
                            width: 15,
                            height: 15,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
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
                        educationData.map((item, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        sx={{
                                            color: 'black',
                                            backgroundColor: 'mypresetcolor.highlightColor',
                                            boxShadow: `1px 1px 5px ${theme.palette.mypresetcolor.highlightColor},
                            -1px -1px 5px ${theme.palette.mypresetcolor.highlightColor}`
                                        }} >
                                        <FaCheck size={50} />
                                    </TimelineDot>
                                    {index < educationData.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <EducationCard data={item} />
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Box>
        </>
    )
}

export default EducationSection;