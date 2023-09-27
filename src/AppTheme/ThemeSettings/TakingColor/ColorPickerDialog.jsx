import React, { useState } from 'react';
import { Box, Button, Dialog, Divider, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material';
import { ChromePicker, CirclePicker } from 'react-color';
import { Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';


const ColorPickerDialog = ({ isColorPickerOpen, setIsColorPickerOpen, whichBoxColor, selectedColor, defaultColors }) => {
    const theme = useTheme();
    const [isCustomPicker, setIsCustomPicker] = useState(false);
    // const circleColor = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#FE9500'];
    const [selectColor, setSelectColor] = useState('#4D4D4D');
    const colorChangerFunc = (e) => {
        setSelectColor(e.hex)
    }
    const chromePickerHandler = (e) => {
        setSelectColor(e.hex)
    }
    const ApplyBtnFunc = () => {
        selectedColor(selectColor, whichBoxColor);
        setIsColorPickerOpen(false);
        setIsCustomPicker(false);
        setSelectColor('#4D4D4D')

    }
    return (
        <>
            <Dialog
                open={isColorPickerOpen}
                keepMounted
                aria-describedby="color-picker-dialog"
                sx={{
                    '&.MuiDialog-root': {
                        cursor: 'not-allowed'
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(1px)',
                    },
                    '& .MuiDialog-paper': {
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
                    '& .color-picker-box .circle-picker': {
                        // width: {xxs: '250px !important', sm: '380px !important'}
                        marginRight: '0px !important',

                    },
                    '& .color-picker-box .chrome-picker + div': {
                        display: 'none !important'
                    }
                }}
            >
                <Stack width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={2} pb={1}>
                    <Typography variant='h6' fontWeight={'bold'}>{whichBoxColor} Color</Typography>
                    <IconButton size='small' onClick={() => { setIsColorPickerOpen(false); setIsCustomPicker(false) }}>
                        <Close fontSize='small' />
                    </IconButton>
                </Stack>
                <Divider />

                <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1} p={2} pt={1}>
                    <Paper
                        onClick={() => setIsCustomPicker(!isCustomPicker)}
                        sx={{
                            width: '100%',
                            height: '25px',
                            backgroundColor: selectColor,
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            backgroundImage: 'none'
                        }} >
                        <Typography variant='caption' fontWeight={'600'} color={'white'}>Customise</Typography>
                    </Paper>

                    <Box className='color-picker-box'>
                        <AnimatePresence initial={false}>
                            {
                                isCustomPicker
                                    ? <motion.div initial={{ scale: 0, opacity: 0, y: -100 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: 0.3 }} exit={{ scale: 0, opacity: 0 }}>
                                        <ChromePicker color={selectColor} onChange={chromePickerHandler} disableAlpha={true} />
                                    </motion.div>
                                    : <CirclePicker width='250px' circleSpacing={7} colors={defaultColors} onChange={colorChangerFunc} />
                            }
                        </AnimatePresence>
                    </Box>

                    <Stack width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
                        <Button variant='contained' size='small' onClick={() => ApplyBtnFunc()}>Add</Button>
                    </Stack>
                </Box>
            </Dialog >
        </>
    )
}

export default ColorPickerDialog;