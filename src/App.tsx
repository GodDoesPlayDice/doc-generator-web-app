import React, { useEffect } from 'react';
import Table from './components/table'
import Button from '@material-ui/core/Button';
import SimpleSelect from './components/select'
import SimpleButton from './components/button';
import SimpleBackdrop from './components/backdrop'
import {
  basicNoticeFiels,
  noticeWithDebtOrPaymentFields,
  basicActFields,
  basicV2O2Fields,
  basicBFields,
  actWithDebtFields
} from './tableTemplate';

interface selectedOptionsObj {
  "select-development-project": string;
  "select-doc-subtype": string;
  "select-doc-type": string;
}

// интерфейс для опции модального окна или backdrop
interface backdropOptions {
  isOpen: boolean;
  message?: string;
}

function generateDocuments(selectedOptions: selectedOptionsObj, tableRowsData: any) {
  // showModal(message)
  // run google scripts
  // onSuccess run func which shows modal with result 
}

export default function App() {

  // выбранные в селектах опции
  let [options, updateOptions] = React.useState<any>({});
  // конфигурация столбцов
  let [columns, updateColumns] = React.useState<any>([]);
  // данные из таблицы
  let [tableRowsData, updateTableRowsData] = React.useState<any>([]);
  // для модального окна
  let [modalOptions, updateModalOptions] = React.useState<backdropOptions>({
    isOpen: false
  });

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
    // обновление состава полей таблицы по собранному шаблону 
    updateColumns(finalTemplate);

  }, [options]);

  function onTableChange(data: any) {
    updateTableRowsData(data);
  }

  function onSelectChange(value: string, id: string) {
    // при изменении любого селекта должны удаляться все данные таблицы
    updateTableRowsData(false);
    //записываем в глобальный state выбранные опции в селектах
    updateOptions((prevState: any) => {
      prevState[id] = value;
      return { ...prevState };
    });

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
        labelText="Вид документа"
        liftStateUpFunc={onSelectChange}
        menuItems={{
          "Акт приема-передачи": 'act',
          "Уведомление": 'notice',
        }}
        selectID="select-doc-type"
        labelID="select-doc-type-label"

      />
      {options['select-doc-type'] &&
        <SimpleSelect
          labelText="Подвид документа"
          liftStateUpFunc={onSelectChange}
          menuItems={docSubtypeSelectItems()}
          selectID="select-doc-subtype"
          labelID="select-doc-subtype-label"

        />
      }
      {options['select-doc-subtype'] &&
        options['select-doc-type'] &&
        <SimpleSelect
          labelText="Объект строительства"
          liftStateUpFunc={onSelectChange}
          menuItems={{
            "Виноград 2": 'V2',
            "Оазис 2": 'O2',
            "Баланс": 'B'
          }
          }
          selectID="select-development-project"
          labelID="select-development-project-label"

        />
      }

      {options['select-development-project'] &&
        <Table
          tableTitle={createTableTitle()}
          liftStateUpFunc={onTableChange}
          columns={columns}
          currentData={tableRowsData}
        />
      }
      {options['select-development-project'] &&
        <SimpleButton
          label="Создать документы"
          onClick={generateBtnClicked}
        />
      }
      <Button variant="outlined" color="primary" onClick={function () {
              updateModalOptions({ isOpen: true })
            }}>
        Show backdrop
      </Button>
      <SimpleBackdrop
        isOpen={modalOptions.isOpen}
        children={
          <SimpleButton
            label="Создать документы"
            onClick={function () {
              console.log(modalOptions)
              updateModalOptions({ isOpen: false })
            }}
          />
        }
      />
    </>

  );
}
