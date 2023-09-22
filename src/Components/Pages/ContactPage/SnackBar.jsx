import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const SnackBar = ({ snackBarProps, setSnackBarprops }) => {
    const position = {
        vertical: 'top',
        horizontal: 'center',
    };
    const { vertical, horizontal } = position;

    const handleClose = () => {
        setSnackBarprops({...snackBarProps, isOpen: false})
      };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackBarProps.isOpen}
                onClose={handleClose}
                autoHideDuration={5000} 
                key={vertical + horizontal}
            >
                <Alert severity={snackBarProps.alertType}>{snackBarProps.message}</Alert>
            </Snackbar>
        </>
    )
}

export default SnackBar;