import React, { useEffect } from 'react';
import Table from './components/table'
import SimpleSelect from './components/select'
import SimpleButton from './components/button';




export default function App() {

  // выбранные в селектах опции
  let [options, updateOptions] = React.useState<any>({});
  // конфигурация столбцов
  let [columns, updateColumns] = React.useState<any>([]);
  // данные из таблицы
  let [tableRowsData, updateTableRowsData] = React.useState<any>([]);


  // используем эффект для изменения полей таблицы
  useEffect(() => {
    let dynamicColumnsTemplate: any;
    if (options["select-development-project"] === 'V2') {
      dynamicColumnsTemplate = [
        {
          title: 'ФИО клиента',
          field: 'clientName',
          /* cellStyle: {width: 200} */
        },
        {
          title: 'Дата рождения',
          field: 'birthDate'
        },
        {
          title: 'Пол клиента',
          field: 'sex'
        },
        {
          title: 'Место рождения',
          field: 'birthPlace'
        },
        {
          title: 'Серия и/или номер паспорта',
          field: 'passportNumber'
        },
        {
          title: 'Кем выдан паспорт',
          field: 'passportIssuedBy'
        },
        {
          title: 'Дата выдачи паспорта',
          field: 'passportIssueDate'
        },
        {
          title: 'Код подразделения',
          field: 'passportOfficeCode'
        },
        {
          title: 'Адрес регистрации клинета',
          field: 'clientAddress'
        },
        {
          title: 'Номер телефона клиента',
          field: 'clientPhone'
        }, // только для баланса
        {
          title: 'Адрес регистрации клинета',
          field: 'clientAddress'
        },
        {
          title: 'Вариант принятия в собственность объекта',
          field: 'wayOfTakingOwnership'
        },
        {
          title: 'Номер корпуса',
          field: 'literNumber', type: 'numeric'
        },
        {
          title: 'Номер квартиры',
          field: 'flatNumber', type: 'numeric'
        },
        {
          title: 'Этаж',
          field: 'floorNumber', type: 'numeric'
        },
        {
          title: 'Количество комнат',
          field: 'roomsNumber', type: 'numeric'
        }, // здесь возможно потребуются изменения для студий
        {
          title: 'Площадь (без лет. пом.) по договору',
          field: 'flatAreaUnderContract', type: 'numeric'
        },
        {
          title: 'Площадь (без лет. пом.) по инвентаризации',
          field: 'flatAreaUnderInventory', type: 'numeric'
        },
        {
          title: 'Площадь (с пониж. коэфф.) по договору',
          field: 'flatAreaWithBalconiesUnderContract', type: 'numeric'
        },
        {
          title: 'Площадь (с пониж. коэфф.) по инвентаризации',
          field: 'flatAreaWithBalconiesUnderInventory', type: 'numeric'
        },
        {
          title: 'Номер договора',
          field: 'docNumber'
        },
        {
          title: 'Дата заключения договора',
          field: 'docDate'
        },
        {
          title: 'Дата заключения договора',
          field: 'docDate'
        },
        {
          title: 'Сумма задолженности в рублях',
          field: 'customerDebtByNumber'
        },
        {
          title: 'Сумма задолженности текстом',
          field: 'customerDebtByText'
        },
      ]
    }

    updateColumns(dynamicColumnsTemplate);
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
