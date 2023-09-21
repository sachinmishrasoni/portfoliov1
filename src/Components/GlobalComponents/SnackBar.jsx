import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const SnackBar = ({ isOpen, setIsNotiyOpen }) => {
    const position = {
        vertical: 'top',
        horizontal: 'center',
    };
    const { vertical, horizontal } = position;

    const handleClose = () => {
        setIsNotiyOpen(false)
      };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={isOpen}
                onClose={handleClose}
                autoHideDuration={5000} 
                key={vertical + horizontal}
            >
                <Alert severity="info">Save Your Theme.</Alert>
            </Snackbar>
        </>
    )
}

export default SnackBar;