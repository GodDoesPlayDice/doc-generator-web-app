import React, { ReactChild } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


interface DialogProps {
    isOpen: boolean;
    children?: ReactChild;
}


export default function AlertDialog(props: DialogProps) {
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
        open={props.isOpen}
        /* onClose={handleClose} */
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          {props.children}
      </Dialog>
    </div>
  );
}