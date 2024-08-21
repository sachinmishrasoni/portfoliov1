import React from 'react';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import 'swiper/css';
import AboutSection from './AboutSection';
import { Language, SportsVolleyball, School, Psychology, Person } from '@mui/icons-material';
import { BsPersonWorkspace } from "react-icons/bs";
import SkillSection from './SkillSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import CardBox from './CardBox';
import HobbiesSection from './HobbiesSection';
import LanguageSection from './LanguageSection';
import Heading from '../../GlobalComponents/Heading';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';

const About = () => {
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('md'));
    // const [activeView, setActiveView] = useState('desktop');
    // const viewHandler = (val) => {
    //     setActiveView(val);
    // }
    // useEffect(() => {
    //     if (matches) {
    //         setActiveView('desktop');
    //     } else {
    //         setActiveView('mobile');
    //     }
    // }, [matches])
    return (
        <>
            <Container
                id={'about'}
                data-section
                disableGutters
                sx={{
                    minHeight: 'calc(100vh)',
                    py: 7
                }}
            >
                <Box border={'2px none yellow'} mx={1} borderRadius={'15px'}>
                    <TranslateYFramer>
                        <Heading headingName={'About Me'} headingIcon={Person} />
                    </TranslateYFramer>
                    <Box className='boxView-mobiles'>
                        <Grid container spacing={1.5}>
                            <Grid item xxs={12} md={12} >
                                <TranslateYFramer>
                                    <AboutSection />
                                </TranslateYFramer>
                            </Grid>

                            <Grid xxs={12} md={6}>
                                <TranslateXFramer XVal='-100vw' fullHeight={true}>
                                    <CardBox title='Experiences' icon={BsPersonWorkspace} content={<ExperienceSection />} paddingLeft={0} />
                                </TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={6} pl={{ xxs: 0, md: 0.5 }}>
                                <TranslateXFramer XVal='100vw'>
                                    <CardBox title='Education' icon={School} content={<EducationSection />} paddingLeft={0} />
                                </TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={12} position={'relative'} pr={{ xxs: 0, md: 0.5 }}>
                                <TranslateXFramer XVal='-100vw'>
                                    <CardBox title='Skills' icon={Psychology} content={<SkillSection />} />
                                </TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={6} pr={{ xxs: 0, md: 0.5 }}>
                                <TranslateXFramer XVal='-100vw'>
                                    <CardBox title='Hobbies' icon={SportsVolleyball} content={<HobbiesSection />} />
                                </TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={6} pl={{ xxs: 0, md: 0.5 }}>
                                <TranslateXFramer XVal='100vw'>
                                    <CardBox title='Languages' icon={Language} content={<LanguageSection />} />
                                </TranslateXFramer>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Box mt={2}
                    sx={{
                        '& .activeBtn': {
                            backgroundColor: 'green',
                            color: ''
                        }
                    }}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
                        <Typography>View: </Typography>
                        <Tooltip title='Desktop'>
                            <IconButton className={`viewBtn ${activeView === 'desktop' ? 'activeBtn' : null}`} size='small' onClick={() => viewHandler('desktop')}>
                                <Computer fontSize='small' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Mobile'>
                            <IconButton className={`viewBtn ${activeView === 'mobile' ? 'activeBtn' : null}`} size='small' onClick={() => viewHandler('mobile')}>
                                <Smartphone fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box> */}
            </Container>
        </>
    )
}

export default About;