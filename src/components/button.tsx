import React, { ReactChild } from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      width: '40%',
      marginLeft: '30%',
      height: 450,
      background: 'center url("https://icdn.lenta.ru/images/2017/04/12/20/20170412202539377/detail_3e5466c192ac4ec7863d26c94420095a.jpg")'
    },
  }),
);
/* https://icdn.lenta.ru/images/2017/04/12/20/20170412202539377/detail_3e5466c192ac4ec7863d26c94420095a.jpg */
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
          /* startIcon={props.startIcon} */
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={props.onClick}
        >
          {/* {props.label} */}
        </Button>
      </div>
    );
  }