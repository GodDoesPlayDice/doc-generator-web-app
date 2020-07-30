import React, { ReactChild } from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

interface ButtonProps {
    label: string;
    onClick: () => void;
    startIcon?: ReactChild;
}

export default function SimpleButton(props: ButtonProps) {
    const classes = useStyles();
  
    return (
      <div>
        <Button
          startIcon={props.startIcon}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={props.onClick}
        >
          {props.label}
        </Button>
      </div>
    );
  }