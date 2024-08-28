import React from 'react';
import { Stack } from '@mui/material';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';
import { hobbiesData } from '../../../Data/hobbies';
import CustomChip from '../../GlobalComponents/CustomChip';

const HobbiesSection = () => {
    return (
        <>
            <Stack mt={2} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={1} sx={{ '& .MuiChip-root': { fontWeight: '500' }, '& .MuiChip-root:hover': { backgroundColor: 'mypresetcolor.foregroundColor' } }}>
                {
                    hobbiesData.map((item, index) => (
                        <SkillCard1Framer key={index} dVal={index * 0.15}>
                            <CustomChip label={item.label} icon={item.icon} />
                        </SkillCard1Framer>
                    ))
                }
            </Stack>
        </>
    )
}

export default HobbiesSection;