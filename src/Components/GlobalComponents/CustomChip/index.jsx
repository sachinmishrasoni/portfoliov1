import { Chip } from '@mui/material';
import React from 'react'

const CustomChip = ({label, icon: IconComponent}) => {
    return (
        <Chip
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
        />
    )
}

export default CustomChip;