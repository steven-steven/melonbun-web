import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
    /** Indicate if Toaster is displaying */
    open: boolean;
    /** Message shown in toaster */
    message: string;
    /** Callback to close toast */
    onRequestClose: () => void;
    /** Duration toast displays*/
    duration?: number;
}

export const Toaster = (props: IProps) => {
    const { open, message, onRequestClose, duration } = props;
    return (
        <span>
            <Snackbar
                open={open}
                message={message}
                anchorOrigin={{ 
                    vertical: 'top', 
                    horizontal: 'right' 
                }}
                TransitionComponent={Fade}
                autoHideDuration={duration || 5000}
                onClose={onRequestClose}
                action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={onRequestClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </span>
    );
}

export default Toaster;
