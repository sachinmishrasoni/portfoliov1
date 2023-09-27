import React from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const NotifySnackBar = ({ notifyBarProps, setNotifyBarProps}) => {
    const position = {
        vertical: 'top',
        horizontal: 'center',
    };
    const { vertical, horizontal } = position;

    const handleClose = () => {
        setNotifyBarProps({ ...notifyBarProps, isOpen: false });
    };

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    position: 'absolute',
                    top: '0px',
                }}
            >
                <AnimatePresence>
                    {
                        notifyBarProps.isOpen && (
                            <motion.div
                                initial={{
                                    y: '-100vh'
                                }}
                                animate={{
                                    y: 0
                                }}
                                transition={{
                                    // duration: 0.3,
                                    type: 'spring',
                                    // bounce: 0.3,
                                    stiffness: 65
                                }}
                                exit={{
                                    y: '-100vh'
                                }}
                            >
                                <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={notifyBarProps.isOpen}
                                    onClose={handleClose}
                                    autoHideDuration={3000}
                                    key={vertical + horizontal}
                                    sx={{ position: 'absolute', top: '10px', '@media(min-width: 600px)': { top: 15, left: 0, right: 0, transform: 'none' } }}
                                >
                                    <Alert severity="info">{notifyBarProps.message}</Alert>
                                </Snackbar>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </Box>
        </>
    )
}

export default NotifySnackBar;