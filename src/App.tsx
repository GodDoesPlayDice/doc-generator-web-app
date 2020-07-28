import React, { useEffect } from 'react';
import Table from './components/table'
import SimpleSelect from './components/select'
import SimpleButton from './components/button';
import {
  basicNoticeFiels,
  noticeWithDebtOrPaymentFields,
  basicActFields,
  basicV2O2Fields,
  basicBFields,
  actWithDebtFields
} from './tableTemplate';

export default function App() {

  // выбранные в селектах опции
  let [options, updateOptions] = React.useState<any>({});
  // конфигурация столбцов
  let [columns, updateColumns] = React.useState<any>([]);
  // данные из таблицы
  let [tableRowsData, updateTableRowsData] = React.useState<any>([]);

  // используем эффект для изменения полей таблицы
  useEffect(() => {
    let finalTemplate: any = [];
    // поля для уведомления
    if (options["select-doc-type"] === 'notice') {
      finalTemplate = finalTemplate.concat(basicNoticeFiels);
      // проверка подтипа документа 
      if (options["select-doc-subtype"] === 'noticeWithDebt' || options["select-doc-subtype"] === 'noticeWithPayment') {
        finalTemplate = finalTemplate.concat(noticeWithDebtOrPaymentFields);
      }
    };
    // поля для акта приема-передачи
    if (options["select-doc-type"] === 'act') {
      finalTemplate = finalTemplate.concat(basicActFields)
      // выбор полей для объекта 
      if (options["select-development-project"] === 'B') {
        finalTemplate = finalTemplate.concat(basicBFields)
      } else {
        finalTemplate = finalTemplate.concat(basicV2O2Fields)
      }
      // выбор полей для подтипа документа
      if (options["select-doc-subtype"] === 'withDebt') {
        finalTemplate = finalTemplate.concat(actWithDebtFields)
      }
    };
    updateColumns(finalTemplate);
  }, [options]);

  function onTableChange(data: any) {
    updateTableRowsData(data);
  }

  function onSelectChange(value: string, id: string) {

    //записываем в глобальный state выбранные опции в селектах
    updateOptions((prevState: any) => {
      prevState[id] = value;
      return { ...prevState };
    });
    // при изменении любого селекта должны удаляться все данные таблицы
    updateTableRowsData(false);
    //
  }

  function generateBtnClicked() {
    console.log(options, tableRowsData);
  }

  const docSubtypeSelectItems = () => {
    if (options["select-doc-type"] === 'notice') {
      return (
        {
          "Уведомление общее": 'simpleNotice',
          "Уведомление с доплатой": 'noticeWithDebt',
          "Уведомление с возвратом": 'noticeWithPayment',
        }
      );
    } else if (options["select-doc-type"] === 'act') {
      return ({
        "С долгом": 'withDebt',
        "Без долга": 'withoutDebt'
      });
    }
  }

  const createTableTitle = () => {
    if (options == {}) return "Таблица документов";
    let result: string = "";
    for (let key in options) {
      result = result + " " + (options[key] as string);
    }
    return result;
  }
  return (
    <>
      <SimpleSelect
        labelText="Объект строительства"
        liftStateUpFunc={onSelectChange}
        menuItems={{
          "Виноград 2": 'V2',
          "Оазис 2": 'O2',
          "Баланс": 'B'
        }}
        selectID="select-development-project"
        labelID="select-development-project-label"

      />
      <SimpleSelect
        labelText="Вид документа"
        liftStateUpFunc={onSelectChange}
        menuItems={{
          "Акт приема-передачи": 'act',
          "Уведомление": 'notice',
        }}
        selectID="select-doc-type"
        labelID="select-doc-type-label"

      />
      <SimpleSelect
        labelText="Подвид документа"
        liftStateUpFunc={onSelectChange}
        menuItems={docSubtypeSelectItems()}
        selectID="select-doc-subtype"
        labelID="select-doc-subtype-label"

      />
      <Table
        tableTitle={createTableTitle()}
        liftStateUpFunc={onTableChange}
        columns={columns}
        currentData={tableRowsData}
      />
      <SimpleButton
        label="Создать документы"
        onClick={generateBtnClicked}
      />
    </>

  );
}
