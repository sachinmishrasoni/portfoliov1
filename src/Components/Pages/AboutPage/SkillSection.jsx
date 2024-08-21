import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import LinearProgessCard from './Cards/LinearProgressCard';
// import ProgressBulltesBox from './ProgressBulltesBox';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import CustomChip from '../../GlobalComponents/CustomChip';
import { backendData, frontendData, languageData, others, profesSkillsData } from '../../../Data/skills'
import { FaRegCircleDot } from "react-icons/fa6";
import CodingBoy from '../../../Image/CodingBoy.png'

const BulletIcon = () => (
    <FaRegCircleDot size={15} />
)
const SkillSection = () => {
    // const [selectedProgressBar, setSelectedProgressBar] = useState('circle');

    // Progress Bar Select Handler
    // const progressCheckerFunc = (val) => {
    //     setSelectedProgressBar(val);
    // }
    return (
        <>
            <Box id='skills-section' className='education-section' mb={2}>
                <Typography variant='caption' component={'div'} textAlign={'center'} color={'gray'} >Professional & Technical</Typography>
                <Box component={'img'} width={300} src={CodingBoy} sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -1,
                    opacity: 0.1
                }} />

                {/* Circle Progess Bar */}
                <Box className='circle-progress-bar' >
                    <Stack className='professional-skills-box' mb={1}>
                        <Typography variant='body1' fontWeight={'bold'}>Professional Skills :</Typography>

                        <Stack direction={'row'} gap={1} flexWrap={'wrap'} mt={1}>
                            {
                                profesSkillsData.map((item, index) => <SkillCard1Framer key={index} dVal={index * 0.15}><CustomChip label={item.label} icon={item.icon} /></SkillCard1Framer>)
                            }
                        </Stack>
                    </Stack>
                    <Box className='technical-skills-box' mt={2} overflow={'hidden'}>
                        <Typography variant='body1' fontWeight={'bold'}>Technical Skills :</Typography>
                        <Box ml={1}>
                            {/* Programming Language */}
                            <Box mt={1}>
                                <Stack direction={'row'} alignItems={'center'} color={'gray'} gap={0.5}>
                                    <BulletIcon />
                                    <Typography variant='caption'>Programming Language</Typography>
                                </Stack>
                                <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={1}>
                                    {languageData.map((item, index) => (
                                        <SkillCard1Framer key={index} dVal={index * 0.15}>
                                            <CustomChip label={item.label} icon={item.icon} />
                                        </SkillCard1Framer>
                                    ))}
                                </Stack>
                            </Box>
                            {/* Frontend */}
                            <Box mt={1.5}>
                                <Stack direction={'row'} alignItems={'center'} color={'gray'} gap={0.5}>
                                    <BulletIcon />
                                    <Typography variant='caption'>Frontend</Typography>
                                </Stack>
                                <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={1}>
                                    {frontendData.map((item, index) => (
                                        <SkillCard1Framer key={index} dVal={index * 0.15}>
                                            <CustomChip label={item.label} icon={item.icon} />
                                        </SkillCard1Framer>
                                    ))}
                                </Stack>
                            </Box>
                            {/* Backend Skills */}
                            <Box mt={1.5}>
                                <Stack direction={'row'} alignItems={'center'} color={'gray'} gap={0.5}>
                                    <BulletIcon />
                                    <Typography variant='caption'>Backend</Typography>
                                </Stack>
                                <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={1}>
                                    {backendData.map((item, index) => (
                                        <SkillCard1Framer key={index} dVal={index * 0.15}>
                                            <CustomChip label={item.label} icon={item.icon} />
                                        </SkillCard1Framer>
                                    ))}
                                </Stack>
                            </Box>

                            {/* Others Skills */}
                            <Box mt={1.5}>
                                <Stack direction={'row'} alignItems={'center'} color={'gray'} gap={0.5}>
                                    <BulletIcon />
                                    <Typography variant='caption'>Others</Typography>
                                </Stack>
                                <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={1}>
                                    {others.map((item, index) => (
                                        <SkillCard1Framer key={index} dVal={index * 0.15}>
                                            <CustomChip label={item.label} icon={item.icon} />
                                        </SkillCard1Framer>
                                    ))}
                                </Stack>
                            </Box>
                        </Box>
                        {/* <Stack sx={{ mt: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: 1 }}>
                            {
                                techSkillsData.map((item, index) => <TranslateXFramer key={index} dVal={index + 1}><TechSkillCard data={item} icon={item.skillIcon} /></TranslateXFramer>)
                            }
                        </Stack> */}
                    </Box>
                </Box>
                {/* Linear Progress Bar */}
                <Box className='linear-progress-bar' >
                    <TranslateYFramer>
                        <Stack className='professional-skills-box' mb={1} backgroundColor={'mypresetcolor.foregroundColor'} borderRadius={'10px'} p={2}>
                            <Typography variant='body1' fontWeight={'bold'}>Professional Skills :</Typography>
                            <Stack direction={'row'} gap={1} flexWrap={'wrap'}>
                                {
                                    profesSkillsData.map((item, index) => <SkillCard1Framer key={index} dVal={index + 1 / 2}><CustomChip label={item.label} icon={item.icon} /></SkillCard1Framer>)
                                }
                            </Stack>
                        </Stack>
                    </TranslateYFramer>
                    <TranslateYFramer>
                        <Stack className='technical-skills-box' mt={1} backgroundColor={'mypresetcolor.foregroundColor'} borderRadius={'10px'} p={2}>
                            <Typography variant='body1' fontWeight={'bold'}>Technical Skills :</Typography>
                            {/* <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
                                {
                                    techSkillsData.map((item, index) => <LinearProgessCard key={index} data={item} />)
                                }
                            </Stack> */}
                        </Stack>
                    </TranslateYFramer>
                </Box>
            </Box>
            {/* <ProgressBulltesBox progressCheckerFunc={progressCheckerFunc} /> */}
        </>
    )
}

export default SkillSection;