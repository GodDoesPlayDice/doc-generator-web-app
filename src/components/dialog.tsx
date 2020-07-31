import React, { ReactChild } from 'react';
import Dialog from '@material-ui/core/Dialog';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


interface DialogProps {
  isOpen: boolean;
  children?: ReactChild;
}


export default function AlertDialog(props: DialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  /* const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.isOpen}
        /* onClose={handleClose} */
        /* aria-labelledby="alert-dialog-title" */
        aria-labelledby="responsive-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.children}
      </Dialog>
    </div>
  );
}