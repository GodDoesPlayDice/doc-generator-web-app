import React, { ReactChild } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

interface BackdropProps {
    isOpen: boolean;
    children?: ReactChild;
}

export default function SimpleBackdrop(props: BackdropProps) {
    const classes = useStyles();
    /* const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    }; */
    /* const handleToggle = () => {
        setOpen(props.isOpen);
    }; */

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.isOpen} /* onClick={handleClose} */>
                {props.children}
            </Backdrop>
        </div>
    );
}