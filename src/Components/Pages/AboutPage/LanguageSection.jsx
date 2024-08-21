import React from 'react';
import { Chip, Stack } from '@mui/material';
import { Circle } from '@mui/icons-material';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';

const LanguageSection = () => {
    const language = ['English', 'Hindi'];
    return (
        <>
            <Stack mt={2} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={1} sx={{ '& .MuiChip-root': { fontWeight: '500' }, '& .MuiChip-root:hover': { backgroundColor: 'mypresetcolor.foregroundColor' } }}>
                {language.map((lang, ind) => <SkillCard1Framer key={ind} dVal={ind * 0.5}><Chip icon={<Circle color='primary' />} label={lang} /></SkillCard1Framer>)}
            </Stack>
        </>
    )
}

export default LanguageSection;