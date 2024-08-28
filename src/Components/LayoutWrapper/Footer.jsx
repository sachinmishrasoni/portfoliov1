import { alpha, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import TextEffectFramer from '../GlobalComponents/AnimatedCompo/TextEffectFramer';

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: (theme) => alpha(theme.palette.mypresetcolor.foregroundColor, 0.5),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '25px 25px 0 0',
                    p: 3,
                    pb: { xxs: '75px', md: 5 },
                    mt: 5
                }}
            >
                <TextEffectFramer secVal={0.5}>
                    <Stack direction={'row'} alignItems={'center'} gap={0.5} mb={0.5}>
                        <MdOutlineLocationOn />
                        <Typography variant='caption' color={'gray'} mt={0.5}>New Delhi, India</Typography>
                    </Stack>
                </TextEffectFramer>

                <TextEffectFramer secVal={1}>
                    <Typography component={'q'} variant='h5' fontWeight={'bold'} color={'orange'} mb={0.5}>Thanks for Scrolling</Typography>
                </TextEffectFramer>
                <TextEffectFramer secVal={1.5}>
                    <Stack direction={'row'} alignItems={'center'} gap={0.5} mt={0.5}>
                        <FaRegCopyright />
                        <Typography variant='caption'>Copyright - </Typography>
                        <Typography variant='caption'>Sachin Mishra Soni (SAM)</Typography>
                    </Stack>
                </TextEffectFramer>
                <TextEffectFramer secVal={2}>
                    <Box>
                        <Typography variant='caption' color={'gray'} sx={{
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                width: 35,
                                height: 4,
                                borderRadius: 5,
                                backgroundColor: 'orange',
                                position: 'absolute',
                                bottom: -10,
                                left: '50%',
                                transform: 'translate(-50%)'
                            }
                        }}>All Rights Reserved</Typography>
                    </Box>
                </TextEffectFramer>
            </Box>
        </>
    )
}

export default Footer