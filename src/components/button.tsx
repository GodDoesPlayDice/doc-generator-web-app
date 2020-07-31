import React, { ReactChild } from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


/* https://icdn.lenta.ru/images/2017/04/12/20/20170412202539377/detail_3e5466c192ac4ec7863d26c94420095a.jpg */
interface ButtonProps {
  label: string;
  onClick: () => void;
  startIcon?: ReactChild;
}

export default function SimpleButton(props: ButtonProps) {
  const defaultUrl = "https://i.ibb.co/m4qjP6S/2020-07-31-22-43-54.png";
  const pressedUrl = 'https://media.giphy.com/media/Pm4WS5vFEKQVWT4Ts9/giphy.gif';

  let [url, setUrl] = React.useState<any>(defaultUrl)

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
        width: '30%',
        marginLeft: '35%',
        height: 400,
        background: 'center no-repeat url(' + url + ')',
        backgroundSize: '100%',
      },
    }),
  );
  const classes = useStyles();


  return (
    <div>
      <Button
        /* startIcon={props.startIcon} */
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={() => {
          props.onClick();
          setUrl(pressedUrl);
          setTimeout(() => {
            setUrl(defaultUrl);
          }, 1500)
        }}
      >
        {/* {props.label} */}
      </Button>
    </div>
  );
}