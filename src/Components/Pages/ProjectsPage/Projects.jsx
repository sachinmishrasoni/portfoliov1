import React from 'react'
import { Container, Stack } from '@mui/material';
import Heading from '../../GlobalComponents/Heading';
import { AccountTreeTwoTone } from '@mui/icons-material';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import ProjectCard from './ProjectCard';
// import ProjectData from './ProjectData.json';
// import { useTheme } from '@emotion/react';
import ScaleFramer from '../../GlobalComponents/AnimatedCompo/ScaleFramer';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import CounterShow from '../../Common/CounterShow';
import ProjectCard01 from './ProjectCard01';
import SelectInput from './Compo/SelectInput';
// import AnimatedText from '../../GlobalComponents/AnimatedCompo/AnimatedText';
import WavyText from '../../GlobalComponents/AnimatedCompo/WavyText';
// import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';

const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A totam blanditiis est doloribus laudantium, ut alias ad! Incidunt, quibusdam, repudiandae praesentium aut obcaecati excepturi inventore corporis distinctio ducimus natus labore minus dolores totam est vero sint, sunt cupiditate iusto accusantium modi. Cum, veniam eligendi aut possimus aperiam est odio maxime.";

const Projects = () => {
    // const swiperRef = useRef();
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('md'));
    // const [activeTab, setActiveTab] = useState(0);

    // Pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const [projectPerPage, setProjectPerPage] = useState(3);
    // Get Current Projects
    // const indexOfLastPage = currentPage * projectPerPage;
    // const indexOfFirstPage = indexOfLastPage - projectPerPage;
    // const currentProjectPage = ProjectData.slice(indexOfFirstPage, indexOfLastPage);

    // useEffect(() => {
    //     if (matches) {
    //         setProjectPerPage(6);
    //     } else {
    //         setProjectPerPage(3);
    //     }
    // }, [matches])

    // const tabChangerFunc = (event, newValue) => {
    //     setActiveTab(newValue)
    //     swiperRef.current.slideTo(newValue)
    // }

    // const paginationHandler = (event, value) => {
    //     setCurrentPage(value)
    // }

    return (
        <>
            <Container
                disableGutters
                id='projects'
                data-section
                sx={{
                    width: '100%',
                    minHeight: 'calc(100vh)',
                    py: 7,
                    position: 'relative',
                    px: 1
                }}>
                <CounterShow count='03' />
                <TranslateYFramer><Heading heading={'Projects'} icon={AccountTreeTwoTone} caption='My work' /></TranslateYFramer>


                <WavyText text={text} />

                <SelectInput />

                <Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={2}>
                    {
                        Array(5).fill('').map((item, index) => (
                            <>
                                {/* <SkillCard1Framer key={index} dVal={index * 0.15}> */}
                                <ScaleFramer key={index} durVal={1} delayVal={index * 0.3}>
                                    <ProjectCard01 />
                                </ScaleFramer>
                                {/* </SkillCard1Framer> */}
                            </>
                        ))
                    }
                </Stack>
            </Container>
        </>
    )
}

export default Projects;