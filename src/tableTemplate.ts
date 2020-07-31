const basicNoticeFiels = [
    {
        title: 'Дата составления текущего документа',
        field: 'thisDocDate',
        cellStyle: {
            width: 250,
            minWidth: 250
        },
    },
    {
        title: 'ФИО клиента',
        field: 'clientName',
        cellStyle: {
            width: 250,
            minWidth: 250
        },
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Адрес регистрации клинета',
        field: 'clientAddress',
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Дата заключения договора',
        field: 'docDate',
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер договора',
        field: 'docNumber'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер корпуса',
        field: 'literNumber', type: 'numeric'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер квартиры',
        field: 'flatNumber', type: 'numeric'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Дата выдачи разрешения на ввод',
        field: 'statePermitDate'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Идентификатор разрешения на ввод',
        field: 'statePermitID'
    },
];
const noticeWithDebtOrPaymentFields = [
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Сумма возврата/доплаты числом',
        field: 'paymentByNumber'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Сумма возврата/доплаты текстом',
        field: 'paymentByText'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Проектная площадь',
        field: 'areaByProject'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Фактическая площадь',
        field: 'areaActual'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Стомость 1 кв. м. по договору',
        field: 'legalOneSquareMeterCost'
    }
];
const basicActFields: any = [
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'ФИО клиента',
        field: 'clientName',
        /* cellStyle: {width: 200} */
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Дата рождения',
        field: 'birthDate',
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Пол клиента',
        field: 'sex'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Место рождения',
        field: 'birthPlace'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Серия и/или номер паспорта',
        field: 'passportNumber'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Кем выдан паспорт',
        field: 'passportIssuedBy'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Дата выдачи паспорта',
        field: 'passportIssueDate'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Код подразделения',
        field: 'passportOfficeCode'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Адрес регистрации клинета',
        field: 'clientAddress'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Вариант принятия в собственность объекта',
        field: 'wayOfTakingOwnership'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер корпуса',
        field: 'literNumber', type: 'numeric'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер квартиры',
        field: 'flatNumber', type: 'numeric'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Этаж',
        field: 'floorNumber', type: 'numeric'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Количество комнат',
        field: 'roomsNumber', type: 'numeric'
    }, // здесь возможно потребуются изменения для студий
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер договора',
        field: 'docNumber'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Дата заключения договора',
        field: 'docDate'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'ФИО сокращенно',
        field: 'shortClientName'
    },
];

const basicV2O2Fields = [
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Площадь (без лет. пом.) по договору',
        field: 'flatAreaUnderContract', /* type: 'numeric' */
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Площадь (без лет. пом.) по инвентаризации',
        field: 'flatAreaUnderInventory', /* type: 'numeric' */
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Площадь (с пониж. коэфф.) по договору',
        field: 'flatAreaWithBalconiesUnderContract', /* type: 'numeric' */
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Площадь (с пониж. коэфф.) по инвентаризации',
        field: 'flatAreaWithBalconiesUnderInventory', /* type: 'numeric' */
    },
];
const basicBV2Fields = [
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер подъезда',
        field: 'entranceNumber', type: 'numeric'
    },
];
const basicBFields = [
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Номер телефона клиента',
        field: 'clientPhone'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Проектная площадь квартиры по договору',
        field: 'totalAreaUnderContract', type: 'numeric'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Проектная площадь квартиры по инвентаризации',
        field: 'totalAreaUnderInventory', type: 'numeric'
    },
];
const actWithDebtFields = [
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Сумма задолженности в рублях',
        field: 'customerDebtByNumber'
    },
    {
        cellStyle: {
            width: 250,
            minWidth: 250
        },
        title: 'Сумма задолженности текстом',
        field: 'customerDebtByText'
    },
];

export {
    basicNoticeFiels,
    noticeWithDebtOrPaymentFields,
    basicActFields,
    basicV2O2Fields,
    basicBFields,
    actWithDebtFields,
    basicBV2Fields
};