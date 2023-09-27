import React, { useState } from 'react';
import { Box, Button, Dialog, IconButton, Paper, Slide, Stack, TextField, Typography, styled, useTheme } from '@mui/material';
import TransparentImg from '../../../Image/transparentImg01.jpg';
import ColorPickerDialog from './ColorPickerDialog';
import NotifySnackBar from '../../../Components/GlobalComponents/NotifySnackBar';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const RoundedPaper = styled(Paper)(({ theme }) => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    // border: '1px solid white',
    padding: '5px',
    position: 'relative',
    backgroundImage: `url('${TransparentImg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
    '&::before': {
        content: '""',
        position: 'absolute',
        left: -1,
        top: -1,
        width: '105%',
        height: '105%',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        zIndex: 1
    }
}));

const defaultThemeColors = {
    forBackground: ['#451952',],
    forForeground: ['#662549'],
    forHighlight: ['#AE445A'],
    forFont: ['#F39F5A'],
};

const TakeThemeDialog = ({ isThemeDialogOpen, setIsThemeDialogOpen, userThemeTakingFunc, addThemeCounter }) => {
    const theme = useTheme();
    const defaultThemeName = theme.palette.mode === 'dark'? `Untitle${addThemeCounter} Dark` : `Untitle${addThemeCounter} Light`;
    const [defaultColors, setDefaultColors] = useState();
    const [userThemeName, setUserThemeName] = useState(defaultThemeName);
    const [userThemeColors, setUserThemeColor] = useState({
        backgroundColor: '',
        foregroundColor: '',
        highlightColor: '',
        fontColor: ''
    });
    const { backgroundColor, foregroundColor, highlightColor, fontColor } = userThemeColors;
    const [activeBtnBox, setActiveBtnBox] = useState('background');
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
    const [whichBoxColor, setWhichBoxColor] = useState('');
    const [notifyBarProps, setNotifyBarProps] = useState({
        isOpen: false,
        alertType: 'info',
        message: ''
    });



    const titlerHandler = (e) => {
        setUserThemeName(e.target.value);
    }

    const colorBoxBtnFunc = (whichbox) => {
        if (whichbox === 'background') {
            setActiveBtnBox('background');
            setWhichBoxColor('Background');
            setDefaultColors(defaultThemeColors.forBackground);
        }
        else if (whichbox === 'foreground') {
            setActiveBtnBox('foreground');
            setWhichBoxColor('Foreground');
            setDefaultColors(defaultThemeColors.forForeground);
        }
        else if (whichbox === 'highlight') {
            setActiveBtnBox('highlight');
            setWhichBoxColor('Highlight');
            setDefaultColors(defaultThemeColors.forHighlight);
        }
        else {
            setActiveBtnBox('font');
            setWhichBoxColor('Font');
            setDefaultColors(defaultThemeColors.forFont);
        }
        setIsColorPickerOpen(true);
    };
    const selectedColor = (colorVal, whichbox) => {
        if (whichbox === 'Background') {
            setUserThemeColor({ ...userThemeColors, backgroundColor: colorVal });
            setActiveBtnBox('foreground');
        }
        else if (whichbox === 'Foreground') {
            setUserThemeColor({ ...userThemeColors, foregroundColor: colorVal });
            setActiveBtnBox('highlight');
        }
        else if (whichbox === 'Highlight') {
            setUserThemeColor({ ...userThemeColors, highlightColor: colorVal });
            setActiveBtnBox('font');
        }
        else {
            setUserThemeColor({ ...userThemeColors, fontColor: colorVal });
            setActiveBtnBox('background');
        }
    };

    const addBtnFunc = () => {
        let checktheme = Object.values(userThemeColors);
        if (checktheme.every((item) => item.trim() !== '')) {
            if (backgroundColor !== highlightColor && highlightColor !== fontColor) {
                const userTheme = { themeName: userThemeName, themeColors: { backgroundColor: backgroundColor, foregroundColor: foregroundColor, fontColor: fontColor } };
                userThemeTakingFunc(userTheme, highlightColor);
                // after add then close and empty
                setIsThemeDialogOpen(false);
                setUserThemeColor({ ...userThemeColors, backgroundColor: '', foregroundColor: '', highlightColor: '', fontColor: '' });
                setActiveBtnBox('background');
            } else {
                setNotifyBarProps({ ...notifyBarProps, isOpen: true, message: 'Fill Different Color' });
            }
        } else {
            setNotifyBarProps({ ...notifyBarProps, isOpen: true, message: 'Fill Color Box.' });
        }
    }

    const closeBtnFun = () => {
        setIsThemeDialogOpen(false);
        setUserThemeColor({ ...userThemeColors, backgroundColor: '', foregroundColor: '', highlightColor: '', fontColor: '' });
        setActiveBtnBox('background');
    };
    return (
        <>
            <Dialog
                open={isThemeDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                // onClose={() => setIsDialogOpen(false)}
                aria-describedby="taking-theme-dialog"
                sx={{
                    '&.MuiDialog-root': {
                        cursor: 'not-allowed'
                    },
                    '& .MuiBackdrop-root': {
                        backdropFilter: 'blur(5px)',
                    },
                    '& .MuiDialog-paper': {
                        width: 400,
                        backgroundColor: 'mypresetcolor.backgroundColor',
                        zIndex: 1,
                        cursor: 'default'
                    },
                    '& .MuiDialog-paper::before': {
                        content: '""',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `radial-gradient(${theme.palette.mypresetcolor.backgroundColor}, ${theme.palette.mypresetcolor.foregroundColor})`,
                        opacity: '0.5',
                        zIndex: '-1'
                    },
                    '& .MuiInputBase-root input': {
                        p: 0,
                        fontSize: '1.3rem',
                        // width: {xxs: '200px', sm: '225px',},
                        textAlign: 'center'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        borderBottom: '2px solid',
                        borderRadius: '0px'
                    },
                    '& .dialog-actions': {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    },
                    '& .choose-color-box button': {
                        p: '2px',
                        border: '3px solid transparent',
                    },
                    '& .choose-color-box .activebtn': {
                        border: '3px solid',
                        borderColor: 'mypresetcolor.highlightColor',
                    }
                }}
            >
                <Box p={2}>
                    <Typography textAlign={'center'} variant='h5' fontWeight={'bold'} mb={2}>Select Theme</Typography>
                    <Stack display={'flex'} flexDirection={'row'} alignItems={'flex-end'} gap={1} mb={1}>
                        <Typography width={'200px'} variant='h6' >Theme Name: </Typography>
                        <TextField
                            value={userThemeName}
                            autoFocus
                            onChange={titlerHandler}
                        />
                    </Stack>
                    <Stack className='choose-color-box'>
                        <Typography variant='h6' >Choose Colors :</Typography>
                        <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={1}>
                            <Box className='background-color-box' display={'flex'} flexDirection={'column'} alignItems={'center '}>
                                <IconButton className={activeBtnBox === 'background' && backgroundColor.trim() === '' ? 'activebtn' : null} size='small' onClick={() => colorBoxBtnFunc('background')} >
                                    <RoundedPaper sx={{ '&::before': { backgroundColor: backgroundColor } }} />
                                </IconButton>
                                <Typography variant='caption'>Background</Typography>
                            </Box>

                            <Box className='foreground-color-box' display={'flex'} flexDirection={'column'} alignItems={'center '}>
                                <IconButton className={activeBtnBox === 'foreground' && foregroundColor.trim() === '' ? 'activebtn' : null} size='small' onClick={() => colorBoxBtnFunc('foreground')}>
                                    <RoundedPaper sx={{ '&::before': { backgroundColor: foregroundColor } }} />
                                </IconButton>
                                <Typography variant='caption'>Foreground</Typography>
                            </Box>

                            <Box className='highlight-color-box' display={'flex'} flexDirection={'column'} alignItems={'center '}>
                                <IconButton className={activeBtnBox === 'highlight' && fontColor.trim() === '' ? 'activebtn' : null} size='small' onClick={() => colorBoxBtnFunc('highlight')}>
                                    <RoundedPaper sx={{ '&::before': { backgroundColor: highlightColor } }} />
                                </IconButton>
                                <Typography variant='caption'>Highlight</Typography>
                            </Box>

                            <Box className='font-color-box' display={'flex'} flexDirection={'column'} alignItems={'center '}>
                                <IconButton className={activeBtnBox === 'font' && fontColor.trim() === '' ? 'activebtn' : null} size='small' onClick={() => colorBoxBtnFunc('font')}>
                                    <RoundedPaper sx={{ '&::before': { backgroundColor: fontColor } }} />
                                </IconButton>
                                <Typography variant='caption'>Font</Typography>
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack className='dialog-actions' mt={1}>
                        <Button variant='contained' size='small' onClick={() => closeBtnFun()} >Close</Button>
                        <Button variant='contained' size='small' onClick={() => addBtnFunc()}>Add</Button>
                    </Stack>
                </Box>
                <NotifySnackBar notifyBarProps={notifyBarProps} setNotifyBarProps={setNotifyBarProps} />
                <ColorPickerDialog isColorPickerOpen={isColorPickerOpen} setIsColorPickerOpen={setIsColorPickerOpen} whichBoxColor={whichBoxColor} selectedColor={selectedColor} defaultColors={defaultColors} />
            </Dialog >
        </>
    )
}

export default TakeThemeDialog;