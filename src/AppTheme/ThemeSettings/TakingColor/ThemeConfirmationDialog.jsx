import React from 'react';
import { Box, Button, Dialog, Slide, Stack, Typography, useTheme } from '@mui/material';
import { Info } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const ThemeConfirmationDialog = ({isConfirmation, setIsConfirmation, themeApplyBtnFunc}) => {
    const theme = useTheme();
    return (
        <>
            <Dialog
                open={isConfirmation}
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
                }}
            >
                <Box p={2}>
                    <Stack display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Info sx={{fontSize: '3rem'}}/>
                        <Typography variant='h6' fontWeight={'bold'} color={'green'}>Successfully Theme Added!</Typography>
                        <Typography>Would you like to apply the theme you just added?</Typography>
                        {/* <Button variant='outlined' size='small' sx={{fontWeight: 'bold'}}>Apply Theme</Button> */}
                    </Stack>
                    <Stack display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'} mt={2}>
                        <Button variant='contained' size='small' onClick={() => setIsConfirmation(false)}>No</Button>
                        <Button variant='contained' size='small' onClick={() => themeApplyBtnFunc()}>Yes</Button>
                    </Stack>
                </Box>
            </Dialog >
        </>
    )
}

export default ThemeConfirmationDialog;