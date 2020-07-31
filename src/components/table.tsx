import React, { useEffect } from 'react';
import MaterialTable, { Column, MTableHeader } from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import Button from '@material-ui/core/Button';
import { withStyles, withWidth } from '@material-ui/core';

const tableIcons: any = {
	Add: forwardRef((props: any, ref: any) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props: any, ref: any) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
	Edit: forwardRef((props: any, ref: any) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props: any, ref: any) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props: any, ref: any) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props: any, ref: any) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props: any, ref: any) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft {...props} ref={ref} />),
	ResetSearch: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props: any, ref: any) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props: any, ref: any) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn {...props} ref={ref} />)
};




interface TableProps {
	liftStateUpFunc: (data: any) => any;
	columns: any;
	tableTitle: string;
	currentData: any;

}

export default function Table(props: TableProps) {

	// интерфейс у нас будет динамическим, так что пока это уберем
	/* interface Row {
		name: string;
		surname: string;
		birthYear: number;
		birthCity: number;
	} */

	interface TableState {
		columns: Array<Column<any>>;
		data: any[];
	}

	// поднимаем состояние до родителя здесь
	useEffect(() => {
		if (props.currentData === false) {
			setState({
				columns: props.columns,
				data: [],
			})
		};
		props.liftStateUpFunc(state.data);
	});

	const [state, setState] = React.useState<TableState>({
		columns: props.columns,
		data: [],
	});

	const editableObj = {
		onRowAdd: (newData: any) =>
			new Promise((resolve) => {
				setTimeout(() => {
					resolve();
					setState((prevState) => {
						const data = [...prevState.data];
						data.push(newData);
						return { ...prevState, data };
					});
				}, 600);
			}),
		onRowUpdate: (newData: any, oldData: any) =>
			new Promise((resolve) => {
				setTimeout(() => {
					resolve();
					if (oldData) {
						setState((prevState) => {
							const data = [...prevState.data];
							data[data.indexOf(oldData)] = newData;
							return { ...prevState, data };
						});
					}
				}, 600);
			}),
		onRowDelete: (oldData: any) =>
			new Promise((resolve) => {
				setTimeout(() => {
					resolve();
					setState((prevState) => {
						const data = [...prevState.data];
						data.splice(data.indexOf(oldData), 1);
						return { ...prevState, data };
					});
				}, 600);
			}),
	};

	return (
		<MaterialTable
			icons={tableIcons}
			/* column={{
				cellStyle: {
					backgroundColor: '#01579b',
					color: '#FFF'
				}
			}} */
			title={props.tableTitle}
			columns={props.columns}
			data={props.currentData}
			editable={editableObj}
			/* options={{
				fixedColumns: {
					left: 1
				  }
			}} */
			localization={{
				header: {
					actions: 'Действия'
				},
				body: {
					emptyDataSourceMessage: 'Тут пока ни одной записи...',
					addTooltip: 'Добавить документ',
					deleteTooltip: 'Удалить документ',
					editTooltip: 'Редактировать документ',
					editRow: {
						cancelTooltip: 'Отмена',
						saveTooltip: 'Подтвердить',
						deleteText: 'Вы уверены, что хотите удалить строку?',
					}
				},
				toolbar: {
					searchTooltip: 'Поиск',
					searchPlaceholder: 'Найти документ'

				},
				pagination: {
					labelRowsSelect: 'строк',
					labelDisplayedRows: '{count} из {from}-{to}',
					firstTooltip: 'Первая страница',
					previousTooltip: 'Предыдущая страница',
					nextTooltip: 'Следующая страница',
					lastTooltip: 'Последния страница'
				}
			}}
		/>
	);
}