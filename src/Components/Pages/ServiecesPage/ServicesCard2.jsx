import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';

const ServicesCard2 = ({ data, direction = 'right' }) => {
    // const theme = useTheme();
    const { cardHeading, cardImg, cardPara } = data;
    return (
        <>
            <Paper className='services-card2'
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    '&:hover': {
                        cursor: 'pointer'
                    },
                    '& .card-image-box, .empty-box': {
                        transition: 'all 0.5s ease-in'
                    },
                    '&:hover .card-image-box': {
                        backgroundColor: 'mypresetcolor.highlightColor',
                        transition: 'all 0.5s ease-in'
                    },
                    '&:hover .empty-box': {
                        backgroundColor: 'mypresetcolor.foregroundColor',
                        transition: 'all 0.5s ease-in'
                    },
                    '& .heading': {
                        position: 'relative',

                        '&::before': {
                            content: '""',
                            width: '0px',
                            height: '3px',
                            borderRadius: '5px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            left: 0,
                            bottom: -5,
                            transition: 'all 0.3s ease-in'
                        },
                    },
                    '&:hover .heading::before': {
                        width: '150px',
                    },
                    // '& img': {
                    //     position: 'relative',
                    //     '&::before': {
                    //         content: '""', 
                    //         width: '50px',
                    //         height: '10px',
                    //         borderRadius: '5px',
                    //         backgroundColor: 'black ',
                    //         position: 'absolute',
                    //         left: 0,
                    //         bottom: -5,
                    //     }
                    // }

                }}
            >
                <Stack
                    display={'flex'}
                    flexDirection={{ xxs: 'column', sm: direction === 'right' ? 'row' : 'row-reverse' }}
                >
                    <Paper className='card-image-box'
                        sx={{
                            width: { xxs: 'auto', sm: '275px' },
                            // minHeight: '275px',
                            borderRadius: '10px',
                            backgroundColor: 'mypresetcolor.foregroundColor',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            className='card-img upDownAnimation'
                            component={'img'}
                            src={cardImg}
                            alt='Web-Development-Image'
                            height={{ xxs: 175, sm: 200 }}
                        />
                    </Paper>
                    <Box className='card-content'
                        height={'275px'}
                        px={2}
                        py={3}
                        sx={{
                            width: { xxs: 'auto', sm: 'calc(100% - 275px)' },
                            overflowY: { xxs: 'auto', sm: 'auto' },
                        }}
                    >
                        <TextEffectFramer><Typography className='heading' variant='h4' fontWeight={'bold'} textAlign={{ xxs: 'center', sm: 'start' }} mb={2} sx={{
                            // position: 'relative',

                            // '&::before': {
                            //     content: '""',
                            //     width: '0px',
                            //     height: '3px',
                            //     backgroundColor: 'pink',
                            //     position: 'absolute',
                            //     left: 0,
                            //     bottom: -5,
                            //     transition: 'all 0.3s ease-in'
                            // },
                            // '&:hover::before': {
                            //     width: '150px',
                            // }
                        }}>{cardHeading}</Typography></TextEffectFramer>
                        <TextEffectFramer><Typography>{cardPara}</Typography></TextEffectFramer>
                    </Box>
                    <Paper
                        className='empty-box'
                        sx={{
                            width: { xxs: '25px', md: '50px' },
                            backgroundColor: 'mypresetcolor.foregroundColor',
                            borderRadius: direction === 'right' ? '0px 10px 10px 0' : '10px 0px 0px 10px',
                        }}
                    />
                </Stack>
            </Paper>
        </>
    )
}

export default ServicesCard2;