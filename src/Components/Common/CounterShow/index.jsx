import { Box, Typography } from '@mui/material'
import React from 'react'

const CounterShow = ({count = '01'}) => {
    return (
        <Box sx={{
            position: 'absolute',
            right: { xxs: -50, lg: -135 },
            top: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1
        }}>
            <Typography variant='h3' fontWeight={'bold'} color={'gray'} sx={{
                opacity: 0.3
            }}>{count}</Typography>
            <Box sx={{
                width: 85,
                height: '4px',
                backgroundColor: 'mypresetcolor.highlightColor',
                borderRadius: 5
            }} />
        </Box>
    )
}

export default CounterShow