import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import EduCard from './Cards/EduCard';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';

const EducationSection = () => {
    const educationData = [
        {
            title: `Certification`,
            year: '2022-2023',
            course: 'Full Stack Development',
            address: 'Ducat Pitampura',
            marks: 'Percen: --%'
        },
        {
            title: 'Under Gradute',
            year: '2019-2022',
            course: 'B.Voc(Software Development)',
            address: 'IPU University, Dwarka, New Delhi',
            marks: 'CGPA: 8.62'
        },
        {
            title: 'Intermediate (12th)',
            year: '2017-2019',
            course: 'PCM',
            address: 'BSEB, Patna',
            marks: 'Percen: 69.2%'
        },
        {
            title: 'Diploma',
            year: '2017-2018',
            course: 'Advance Diploma in Computer Application (ADCA)',
            address: 'Target Point Computer Education, Patna',
            marks: 'Percen: 89%'
        },
        {
            title: 'Matric (10th)',
            year: '2016-2017',
            course: 'All Necessery Subject',
            address: 'BSEB, Patna',
            marks: 'Percen: 67.2%'
        },
    ]
    return (
        <>
            <Box className='education-section' sx={{ height: '100%', backgroundColor: '', position: 'relative'}}>
                <Typography variant='caption' component={'div'} textAlign={'center'} color={'gray'} mb={0.5} >Education & Courses</Typography>
                <Box
                    className='staight-line'
                    sx={{
                        width: '7px',
                        height: {xxs: '95%', sm: '120%', md: '100%'},
                        backgroundColor: 'mypresetcolor.foregroundColor',
                        borderRadius: '10px',
                        position: 'absolute',
                        left: '10px',
                    }}
                />
                <Stack gap={1} pb={2}>
                    { educationData.map((item, index) => <TranslateYFramer key={index}><EduCard data={item}/></TranslateYFramer>)}
                </Stack>
            </Box>
        </>
    )
}

export default EducationSection;