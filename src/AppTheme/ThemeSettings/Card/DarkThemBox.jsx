import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, MenuItem, Paper, Select, Stack, Tooltip, Typography, styled, useTheme } from '@mui/material';
import { Add, Delete, DoneOutline } from '@mui/icons-material';
import { ThemeModeContext } from '../../ThemeModeProvider';
import TakeThemeDialog from '../TakingColor/TakeThemeDialog';
import ThemeConfirmationDialog from '../TakingColor/ThemeConfirmationDialog';

const BulletPaper = styled(Paper)(({ theme }) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    cursor: 'pointer'
}));

const defaultDarkTheme = JSON.parse(localStorage.getItem('darkTheme')) || {
    themeName: 'Default Dark',
    themeColors: {
        backgroundColor: '#151922',
        foregroundColor: '#1C1F24',
        highlightColor: '#79E0EE',
        fontColor: '#FFFFFF',
    }
};
const userAddedThemeLclS = JSON.parse(localStorage.getItem('userAddedDarkTheme')) || [];
const userAddedHighlightLclSrg = JSON.parse(localStorage.getItem('userAddedDarkHighlight')) || [];


const DarkThemBox = ({ darkThemeColors, getUserDarkTheme, changeThemeHighlightFunc }) => {
    const consumer = useContext(ThemeModeContext);
    const { changeHighlight, themeChangerFunc } = consumer.presetFun;
    const theme = useTheme();

    const [userAddedTheme, setUserAddedTheme] = useState(userAddedThemeLclS);
    const [userAddedHiglight, setUserAddedHighlight] = useState(userAddedHighlightLclSrg);
    const [newDarkThemePresets, setNewDarkThemePresets] = useState([...darkThemeColors.themePresets, ...userAddedTheme]);
    const [newThemeHighlight, setNewThemeHighlight] = useState([...darkThemeColors.themeHighlight, ...userAddedHiglight]);

    const [selectTheme, setSelectTheme] = useState(defaultDarkTheme.themeName);
    const [selectHighlight, setSelectHighlight] = useState(defaultDarkTheme.themeColors.highlightColor);
    const [selectedTheme, setSelectedTheme] = useState({
        themeName: defaultDarkTheme.themeName,
        themeColors: {
            backgroundColor: defaultDarkTheme.themeColors.backgroundColor,
            foregroundColor: defaultDarkTheme.themeColors.foregroundColor,
            highlightColor: selectHighlight,
            fontColor: defaultDarkTheme.themeColors.fontColor
        }
    });

    const [isThemeDialogOpen, setIsThemeDialogOpen] = useState(false);
    const addThemeCounter = newDarkThemePresets.length - darkThemeColors.themePresets.length + 1;
    const [isConfirmation, setIsConfirmation] = useState(false);

    // Theme Preset Function
    const selectThemePresetFunc = (e) => {
        const selVal = e.target.value;
        setSelectTheme(selVal);
        const findTheme = newDarkThemePresets.filter(preset => preset.themeName === selVal);
        const themeCol = findTheme[0].themeColors;
        themeChangerFunc({ ...themeCol, highlightColor: selectHighlight });
        setSelectedTheme({ themeName: selVal, themeColors: { ...themeCol, highlightColor: selectHighlight } });
        changeThemeHighlightFunc('theme');      //when change theme then call this func and show snackbar message
    }

    // Highlight Function
    const highlightHandlerFunc = (e) => {
        setSelectHighlight(e.target.value);
        changeHighlight(e.target.value);
        setSelectedTheme({ ...selectedTheme, themeColors: { ...selectedTheme.themeColors, highlightColor: e.target.value } })
        changeThemeHighlightFunc('highlight');      //when change highlight then call this func and show snackbar message
    }

    useEffect(() => {
        if (theme.palette.mode === 'dark') {
            getUserDarkTheme(selectedTheme);
        }
        // eslint-disable-next-line
    }, [selectedTheme]);

    // Add Theme Btn 
    const addthemeBtn = () => {
        setIsThemeDialogOpen(true);
    };

    const userThemeTakingFunc = (themePre, newHighlight) => {
        let allPrestName = newDarkThemePresets.map((preset) => preset.themeName);
        if (!allPrestName.includes(themePre.themeName)) {
            setNewDarkThemePresets([...newDarkThemePresets, themePre]);
            setNewThemeHighlight([...newThemeHighlight, newHighlight]);
            setIsConfirmation(true);
            setUserAddedTheme([...userAddedTheme, themePre]);
            localStorage.setItem('userAddedDarkTheme', JSON.stringify([...userAddedTheme, themePre]));
            setUserAddedHighlight([...userAddedHiglight, newHighlight]);
            localStorage.setItem('userAddedDarkHighlight', JSON.stringify([...userAddedHiglight, newHighlight]));
        } else {
            console.log('Theme already Exits')
        }

    };

    const themeApplyBtnFunc = () => {
        let themePreLastIndex = newDarkThemePresets.length - 1;
        let highlightLastIndex = newThemeHighlight.length - 1;
        let userTheme = newDarkThemePresets[themePreLastIndex];
        let userhighlight = newThemeHighlight[highlightLastIndex];
        const userThemeColors = userTheme.themeColors;
        setSelectTheme(userTheme.themeName)
        themeChangerFunc({ ...userThemeColors, highlightColor: userhighlight });
        setSelectHighlight(userhighlight);
        localStorage.setItem('darkTheme', JSON.stringify({ themeName: userTheme.themeName, themeColors: { ...userThemeColors, highlightColor: userhighlight } }));
        setIsConfirmation(false);

    };

    return (
        <>
            <Box className='darkTheme-boxCard' sx={{ padding: 1, m: 1, border: '1px solid', borderColor: 'mypresetcolor.highlightColor', borderRadius: '10px', backdropFilter: 'blur(5px)' }}>
                {/* Theme Selection */}
                <Box className='theme-select-box' >
                    <Stack mb={0.5} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' color={'mypresetcolor.fontColor'}>Theme Presets :</Typography>
                        {/* Add Theme Button */}
                        <Tooltip title={'Add Theme'} >
                            <IconButton size='small' onClick={() => addthemeBtn()}>
                                <Add fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    {/* Select Theme Preset */}
                    <Select
                        size='small'
                        fullWidth
                        value={selectTheme}
                        onChange={selectThemePresetFunc}
                        sx={{
                            '& .MuiSelect-select .color-boxes': {
                                display: 'none'
                            },
                        }}
                    >
                        {
                            newDarkThemePresets.map((item, index) =>
                                <MenuItem key={index} value={item.themeName} sx={{ justifyContent: 'space-between' }}>
                                    {item.themeName}
                                    <Box className='color-boxes' display={'flex'} flexDirection={'row'} gap={0.25}>
                                        {Object.entries(item.themeColors).map((color, ind) => <Tooltip key={ind} title={`${color[0].slice(0, -5).toUpperCase()} : ${color[1]}`}><BulletPaper className='bullet-circle' sx={{ backgroundColor: color[1] }} /></Tooltip>)}
                                        <Tooltip title={selectHighlight}><BulletPaper className='bullet-circle' sx={{ backgroundColor: selectHighlight }} /></Tooltip>
                                    </Box>
                                </MenuItem>)
                        }
                    </Select>
                </Box>
                {/* Highlight Selection */}
                <Box className='highligh-colors-boxes' mt={1}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' color={'mypresetcolor.fontColor'}>Highlight Colors :</Typography>
                        <Tooltip title={'Add Highlight'}>
                            <IconButton size='small'>
                                <Add fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Select
                        fullWidth
                        size='small'
                        value={selectHighlight}
                        onChange={highlightHandlerFunc}
                        sx={{
                            '& .MuiSelect-select .del-btn': {
                                display: 'none'
                            },
                            '& .MuiSelect-select .check-icon': {
                                display: 'none'
                            },
                            '& .MuiSelect-select .MuiPaper-root': {
                                width: '100%'
                            }

                        }}
                    >
                        {
                            newThemeHighlight.map((item, ind) =>
                                <MenuItem
                                    key={ind}
                                    value={`${item}`}
                                    // onClick={() => changeHighlight(item)}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        '&.MuiMenuItem-root .del-btn': {
                                            display: 'none'
                                        },
                                        '&.MuiMenuItem-root:hover .del-btn': {
                                            display: 'block'
                                        },
                                        '&.MuiMenuItem-root .check-icon': {
                                            display: 'none'
                                        },
                                        '&.Mui-selected .check-icon': {
                                            display: 'block'
                                        },
                                        '&.Mui-selected:hover .del-btn': {
                                            display: 'none'
                                        }
                                    }}
                                >
                                    <Stack width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Paper sx={{ width: '75px', height: '25px', backgroundColor: `${item}`, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='caption' component={'div'} textAlign={'right'}>{item}</Typography>
                                        </Paper>

                                        <Tooltip title='Remove' >
                                            <IconButton className='del-btn' size='small' sx={{ p: 0.5 }} onClick={() => console.log('Deleted')} >
                                                <Delete sx={{ fontSize: '1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <DoneOutline className='check-icon' fontSize='small' sx={{ mr: 0.6, fontWeight: 'bold' }} />
                                    </Stack>
                                </MenuItem>
                            )
                        }
                    </Select>
                </Box>
            </Box>

            {/* Take Theme Colors Dialog */}
            {
                isThemeDialogOpen && (
                    <TakeThemeDialog isThemeDialogOpen={isThemeDialogOpen} setIsThemeDialogOpen={setIsThemeDialogOpen} userThemeTakingFunc={userThemeTakingFunc} addThemeCounter={addThemeCounter} />
                )
            }
            <ThemeConfirmationDialog isConfirmation={isConfirmation} setIsConfirmation={setIsConfirmation} themeApplyBtnFunc={themeApplyBtnFunc} />
        </>
    )
}

export default DarkThemBox;