import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function BAShowMessage(props) {
    const { open, message, close } = props



    const handleClose = () => {
        close(false)
    }

    setOpen(false);


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (

        <>

            <Snackbar
                open={open}
                autoHideDuration={4500}
                onClose={handleClose}
                message={message}
                action={action}
                key={"bottom" + "center"}
            />
        </>
    )
};
