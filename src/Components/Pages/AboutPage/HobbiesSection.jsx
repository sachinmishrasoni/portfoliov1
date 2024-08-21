import React from 'react';
import { Chip, Stack } from '@mui/material';
import { Code, Edit, LocalLibrary, PhotoCamera } from '@mui/icons-material';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';

const HobbiesSection = () => {
    const hobbies = [
        { hobbName: 'Coding', hobbIcon: Code },
        { hobbName: 'Photograpy', hobbIcon: PhotoCamera },
        { hobbName: 'Reading', hobbIcon: LocalLibrary },
        { hobbName: 'Writing', hobbIcon: Edit },
    ];
    return (
        <>
            <Stack mt={2} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={1} sx={{ '& .MuiChip-root': { fontWeight: '500' }, '& .MuiChip-root:hover': { backgroundColor: 'mypresetcolor.foregroundColor' } }}>
                {
                    hobbies.map((item, index) => <SkillCard1Framer key={index} dVal={index * 0.15}><Chip icon={<item.hobbIcon color='primary' />} label={item.hobbName} /></SkillCard1Framer>)
                }
            </Stack>
        </>
    )
}

export default HobbiesSection;