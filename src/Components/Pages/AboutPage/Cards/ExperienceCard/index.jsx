import { Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

const ExperienceCard = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const paperRef = useRef(null);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClickOutside = (event) => {
        if (paperRef.current && !paperRef.current.contains(event.target)) {
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <Paper ref={paperRef} sx={{
            p: 2,
            borderRadius: 2,
            position: 'relative'
        }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                {/* - ( Full Stack Development ) */}
                <Typography variant='h6' fontWeight={'bold'}>{data.title}</Typography>
                <Paper
                    sx={{
                        px: 1.5,
                        pr: 2,
                        pb: 0.2,
                        borderRadius: '15px 0 0 15px',
                        position: 'absolute',
                        right: 0,
                        // top: 13,
                        backgroundColor: 'mypresetcolor.highlightColor'
                    }}>
                    <Typography fontWeight={'bold'} variant='caption' lineHeight={0} color={'black'}>{data.timePeriod}</Typography>
                </Paper>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant='body2' color={'mypresetcolor.highlightColor'}>{data.company}</Typography>
                <Typography variant='caption' textAlign={'right'}>{data.jobType}</Typography>
            </Stack>

            <Typography variant='caption' color={'gray'}
                sx={{
                    overflow: isExpanded ? 'visible' : 'hidden',
                    textOverflow: isExpanded ? 'unset' : 'ellipsis',
                    display: isExpanded ? 'block' : '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'unset' : 3,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {data.description}
            </Typography>
            <Typography component={'h5'} variant='caption' fontWeight={'bold'} color={'primary'}
                sx={{ cursor: 'pointer' }}
                onClick={handleToggleExpand}>{isExpanded ? 'Read Less' : 'Read More'}</Typography>
        </Paper>
    )
}

export default ExperienceCard