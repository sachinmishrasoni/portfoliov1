import { useTheme } from '@emotion/react';
import { Chip } from '@mui/material';
import React from 'react'

const CustomChip = ({ label, icon: IconComponent }) => {
    const theme = useTheme();
    return (
        <>
            {/* 1st Style */}
            {/* <Chip
                icon={<IconComponent size={20} />}
                label={label}
                sx={{
                    border: '0.5px solid',
                    borderColor: 'mypresetcolor.highlightColor',
                    backgroundColor: 'mypresetcolor.foregroundColor',
                    backgroundImage: ' linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
                    '& svg': {
                        backgroundColor: 'mypresetcolor.highlightColor',
                        color: 'black !important',
                        borderRadius: '50px',
                        p: '1px'
                    }
                }}
            /> */}

            {/* Second Style */}
            <Chip
                icon={<IconComponent color={theme.palette.mypresetcolor.highlightColor} size={18} />}
                label={label}
                sx={{
                    px: 0.5,
                    // backgroundColor: (theme) => alpha(theme.palette.mypresetcolor.foregroundColor, 0.3),
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: '0.3s all ease-in',
                    '& span': { zIndex: 5, },
                    '& svg': { zIndex: 5, },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        width: '0%',
                        height: '100%',
                        backgroundColor: 'mypresetcolor.foregroundColor',
                        zIndex: 0,
                        transition: '0.5s all ease-in',
                    },
                    '&:hover::before': {
                        width: '100%'
                    },
                    // '&:hover span': {
                    //     color: 'mypresetcolor.highlightColor'
                    // },
                    // '&:hover svg': {
                    //     color: 'black !important'
                    // }
                }}
            />
        </>
    )
}

export default CustomChip;