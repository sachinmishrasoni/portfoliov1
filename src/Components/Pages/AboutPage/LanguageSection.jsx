import React from 'react';
import { Chip, Stack } from '@mui/material';
import { Circle } from '@mui/icons-material';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';
import { FaE } from "react-icons/fa6";
import { FaH } from "react-icons/fa6";
import CustomChip from '../../GlobalComponents/CustomChip';

const LanguageSection = () => {
    const language = [
        {
            label: 'English', icon: FaE
        },
        {
            label: 'Hindi', icon: FaH
        }
    ];
    return (
        <>
            <Stack mt={2} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={1} sx={{ '& .MuiChip-root': { fontWeight: '500' }, '& .MuiChip-root:hover': { backgroundColor: 'mypresetcolor.foregroundColor' } }}>
                {language.map((lang, ind) => <SkillCard1Framer key={ind} dVal={ind * 0.5}><CustomChip label={lang.label} icon={lang.icon} /></SkillCard1Framer>)}
            </Stack>
        </>
    )
}

export default LanguageSection;