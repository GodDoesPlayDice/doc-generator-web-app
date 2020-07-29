import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 300,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

interface SelectProps {
    liftStateUpFunc: (data: any, id: string) => void,
    menuItems: any,
    selectID: string,
    labelID: string,
    labelText: string,
}

export default function SimpleSelect(props: SelectProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
        // поднимаем состояние родительскому компоненту
        props.liftStateUpFunc(event.target.value as string, props.selectID);
    };

    // сброс данных каждого селекта при размонтировании
    useEffect(() => {
        return function cleanup() {
            props.liftStateUpFunc(null, props.selectID);
        };
    }, []); // если не передавать пустой массив, то виснет приложение

    function makeMenuItems() {
        let result = [];
        for (let key in props.menuItems) {
            result.push(<MenuItem value={props.menuItems[key]}>{key}</MenuItem>)
        }
        return result;
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id={props.labelID}>{props.labelText}</InputLabel>
                <Select
                    labelId={props.labelID}
                    id={props.selectID}
                    value={value}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    {
                        makeMenuItems()
                    }
                </Select>
            </FormControl>
        </div>
    );
}