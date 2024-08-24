import { Box } from '@mui/material'
import React from 'react'
// import { FaCode } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'

const IconShow = () => {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                zIndex: -5,
                opacity: 0.02,
                left: { xxs: -100, lg: -150 },
                top: '50%',
                transform: 'translateY(-50%)'
            }}>
                <FaComputer size={250} />
            </Box>

            {/* <Box sx={{
                position: 'absolute',
                zIndex: -1,
                opacity: 0.05,
                right: { xxs: 300, lg: 300 },
                bottom: 0,
                transform: 'rotateX(75deg)'
            }}>
                <FaCode size={250} />
            </Box> */}
        </>
    )
}

export default IconShow