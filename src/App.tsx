import React, { useEffect } from 'react';
import Table from './components/table'
import Button from '@material-ui/core/Button';

// мой словарь для опций селектов
import Dictionary from './dictionary';

// мои компоненты
import SimpleSelect from './components/select'
import SimpleButton from './components/button';
import SimpleBackdrop from './components/backdrop'
import AlertDialog from './components/dialog';

// для модального окна
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// для backdrop
import CircularProgress from '@material-ui/core/CircularProgress';

//верхнее меню
import NavBar from './components/navbar';

// для кнопки сохранения
import SaveIcon from '@material-ui/icons/Save';

// мои шаблоны для полей таблицы
import {
  basicNoticeFiels,
  noticeWithDebtOrPaymentFields,
  basicActFields,
  basicV2O2Fields,
  basicBFields,
  actWithDebtFields,
  basicBV2Fields
} from './tableTemplate';

// описываем имена опции для селектов и тип хранимых значений
interface selectedOptionsObj {
  "select-development-project": string;
  "select-doc-subtype": string;
  "select-doc-type": string;
}

// интерфейс для опций backdrop
interface backdropOptions {
  isOpen: boolean;
  message?: string;
}

// интерфейс для опций модального окна
interface modalOptions {
  isOpen: boolean;
  message?: string;
  confirmBtn?: () => void;
  cancelBtn?: () => void;
  titleText?: string;
  content?: any;
}

export default function App() {

  // выбранные в селектах опции
  let [options, updateOptions] = React.useState<any>({});
  // конфигурация столбцов
  let [columns, updateColumns] = React.useState<any>([]);
  // данные из таблицы
  let [tableRowsData, updateTableRowsData] = React.useState<any>([]);
  // для backdrop
  let [backdropOptions, updateBackdropOptions] = React.useState<backdropOptions>({
    isOpen: false
  });
  // для модального окна
  let [modalOptions, updateModalOptions] = React.useState<modalOptions>({
    isOpen: false
  });


  // обновляем тут стейт для селектами опций
  function onSelectChange(value: string, selectID: string) {
    // при изменении любого селекта должны удаляться все данные таблицы
    updateTableRowsData(false);
    //записываем в глобальный state выбранные опции в селектах
    updateOptions((prevState: any) => {
      // проверка, меняли ли мы первое поле - тип документа 
      if (selectID === "select-doc-type") {
        return (
          { "select-doc-type": value }
        );
      } else { // если изменено не первое поле
        prevState[selectID] = value;
        return { ...prevState };
      }

    });

  }

  // используем эффект для перерисовки полей таблицы
  useEffect(() => {
    let finalTemplate: any = [
      /* {
        width: 400,
        title: "Details",
        field: "url",
      } */
    ];
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
        finalTemplate = finalTemplate.concat(basicBV2Fields)
        finalTemplate = finalTemplate.concat(basicBFields)
      } else {
        finalTemplate = finalTemplate.concat(basicV2O2Fields)
      }
      // выбор полей для подтипа документа
      if (options["select-doc-subtype"] === 'withDebt') {
        finalTemplate = finalTemplate.concat(basicBV2Fields)
        finalTemplate = finalTemplate.concat(actWithDebtFields)
      }
    };
    // обновление состава полей таблицы по собранному шаблону 
    updateColumns(finalTemplate);

  }, [options]);

  // записываем данные, записанные в таблицу
  function onTableChange(data: any) {
    updateTableRowsData(data);
  }

  // отправка данных на сервер для генерации документов
  function generateDocsConfirmed() {
    const optionsForServer = JSON.stringify(options);
    const dataForServer = JSON.stringify(tableRowsData);


    // приходится делать такое гуано, потому что компилятор не пропускает выкрутасы с гуглом
    eval("google.script.run.withSuccessHandler(onSuccess).generateDocs(optionsForServer, dataForServer)")
    function onSuccess(folderURL: string) {
      updateModalOptions({
        isOpen: true,
        titleText: "Документы успешно созданы",
        content: <><a href={folderURL} target="_blank">Папка с документами</a><p>Очистить таблицу?</p></>,
        confirmBtn: function () {
          // удаление введенных в таблицу данных 
          updateTableRowsData(false);
          // закрывает модальное окно
          updateModalOptions({
            isOpen: false,
          })
        },
        cancelBtn: function () {
          updateModalOptions({ isOpen: false })
        },
      });
      // закрываем backdrop
      updateBackdropOptions({ isOpen: false });
    }

  }

  // определение состава опций селекта выбора подтипа документов
  const docSubtypeSelectItems = () => {
    if (options["select-doc-type"] === 'notice') {
      return (
        {
          "Общее": 'simpleNotice',
          "С доплатой": 'noticeWithDebt',
          "С возвратом": 'noticeWithPayment',
        }
      );
    } else if (options["select-doc-type"] === 'act') {
      return ({
        "С долгом": 'withDebt',
        "Без долга": 'withoutDebt'
      });
    }
  }

  // функция, которая собирает строку заголовка таблицы
  const createTableTitle = () => {
    let result: string = "";
    for (let key in options) {
      result += " | " + (Dictionary[options[key]] as string);
    }
    return result;
  }


  return (
    <>
      <NavBar />
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
        tableRowsData.length > 0 &&
        <SimpleButton
          label="Создать документы"
          onClick={function () {
            updateModalOptions({
              isOpen: true,
              titleText: "Подтверждение",
              content: "Сгенерировать документы по данным в таблице?",
              confirmBtn: function () {
                // закрывает модальное окно
                updateModalOptions({
                  isOpen: false,
                })
                // открывает backdrop
                updateBackdropOptions({ isOpen: true })
                // запускает генерацию документов
                generateDocsConfirmed();
              },
              cancelBtn: function () {
                updateModalOptions({ isOpen: false })
              },
            });

          }}
          startIcon={<SaveIcon />}
        />
      }
      <AlertDialog
        isOpen={modalOptions.isOpen}
        children={
          <>
            <DialogTitle id="alert-dialog-title">{modalOptions.titleText}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {modalOptions.content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={modalOptions.cancelBtn} color="primary">
                Отмена
          </Button>
              <Button onClick={modalOptions.confirmBtn} color="primary" autoFocus>
                Подтвердить
          </Button>
            </DialogActions>
          </>
        }
      />
      {/* крутилочка */}
      <SimpleBackdrop
        isOpen={backdropOptions.isOpen}
        children={<CircularProgress color="inherit" />}
      />
    </>

  );
}
