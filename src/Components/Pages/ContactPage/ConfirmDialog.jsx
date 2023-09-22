import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, Slide, Typography, useTheme } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';
import BoncyTansXFramer from '../../GlobalComponents/AnimatedCompo/BoncyTansXFramer';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const ConfirmDialog = ({ isDialogOpen, setIsDialogOpen, ConfirmDoneBtn }) => {
    const theme = useTheme();
    const doneBtn = () => {
        ConfirmDoneBtn();
        setIsDialogOpen(false);
    }
    return (
        <>
            <Dialog
                open={isDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setIsDialogOpen(false)}
                aria-describedby="user-data-confirmation-dialog"
                sx={{
                    '& .MuiBackdrop-root': {
                        backdropFilter: 'blur(5px)'
                    },
                    '& .MuiPaper-root': {
                        p: 2,
                        width: 400,
                        backgroundColor: 'mypresetcolor.backgroundColor',
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    '& .MuiPaper-root::before': {
                        content: '""',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `radial-gradient(${theme.palette.mypresetcolor.backgroundColor}, ${theme.palette.mypresetcolor.foregroundColor})`,
                        opacity: '0.5'
                    },
                    '& .MuiDialogContent-root': {
                        py: 1,
                        overflow: 'hidden'
                    },
                    '& .MuiDialogActions-root': {
                        justifyContent: 'space-between'
                    }
                }}
            >
                {/* <DialogTitle id="customized-dialog-title">Confirmation</DialogTitle> */}
                <Box pt={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <BoncyTansXFramer><HelpOutline sx={{ fontSize: { xxs: '3rem', md: '3rem' }, color: 'mypresetcolor.highlightColor' }} /></BoncyTansXFramer>
                    <BoncyTansXFramer><Typography variant='h6' fontWeight={'bold'} color={(theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'}>Confirmation</Typography></BoncyTansXFramer>
                </Box>
                <DialogContent>
                    <BoncyTansXFramer><Typography variant='h4' textAlign={'center'} fontWeight={600} color={(theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'}>Are You Sure?</Typography></BoncyTansXFramer>
                </DialogContent>
                <DialogActions>
                    <BoncyTansXFramer><Button variant='contained' size='small' onClick={() => setIsDialogOpen(false)}>Cancel</Button></BoncyTansXFramer>
                    <BoncyTansXFramer><Button variant='contained' size='small' onClick={() => doneBtn()}>Done</Button></BoncyTansXFramer>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ConfirmDialog;