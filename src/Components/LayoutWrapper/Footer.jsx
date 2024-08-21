import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    minHeight: 100,
                    backgroundColor: 'mypresetcolor.foregroundColor',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                p={2}
                pb={{ xxs: '65px', md: 0 }}
                mt={5}
            >
                <Typography component={'q'} variant='h5' fontWeight={'bold'} color={'orange'}>Thanks for Scrolling</Typography>
                <Typography variant='caption' component={'div'} fontWeight={'bold'} p={1}>Copyright@SachinMishraSoni(SAM)</Typography>
            </Box>
        </>
    )
}

export default Footer