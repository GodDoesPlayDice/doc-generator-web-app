const basicNoticeFiels = [
    {
        title: 'Дата составления текущего документа',
        field: 'thisDocDate',
    },
    {
        title: 'ФИО клиента',
        field: 'clientName',
    },
    {
        title: 'Адрес регистрации клинета',
        field: 'clientAddress'
    },
    {
        title: 'Дата заключения договора',
        field: 'docDate'
    },
    {
        title: 'Номер договора',
        field: 'docNumber'
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
        title: 'Дата выдачи разрешения на ввод',
        field: 'statePermitDate'
    },
    {
        title: 'Идентификатор разрешения на ввод',
        field: 'statePermitID'
    },
];
const noticeWithDebtOrPaymentFields = [
    {
        title: 'Сумма возврата/доплаты числом',
        field: 'paymentByNumber'
    },
    {
        title: 'Сумма возврата/доплаты текстом',
        field: 'paymentByText'
    },
    {
        title: 'Проектная площадь',
        field: 'areaByProject'
    },
    {
        title: 'Фактическая площадь',
        field: 'areaActual'
    },
    {
        title: 'Стомость 1 кв. м. по договору',
        field: 'legalOneSquareMeterCost'
    }
];
const basicActFields: any = [
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
        title: 'Номер договора',
        field: 'docNumber'
    },
    {
        title: 'Дата заключения договора',
        field: 'docDate'
    },
    {
        title: 'ФИО сокращенно',
        field: 'shortClientName'
    },
];

const basicV2O2Fields = [
    {
        title: 'Площадь (без лет. пом.) по договору',
        field: 'flatAreaUnderContract', /* type: 'numeric' */
    },
    {
        title: 'Площадь (без лет. пом.) по инвентаризации',
        field: 'flatAreaUnderInventory', /* type: 'numeric' */
    },
    {
        title: 'Площадь (с пониж. коэфф.) по договору',
        field: 'flatAreaWithBalconiesUnderContract', /* type: 'numeric' */
    },
    {
        title: 'Площадь (с пониж. коэфф.) по инвентаризации',
        field: 'flatAreaWithBalconiesUnderInventory', /* type: 'numeric' */
    },
];
const basicBV2Fields = [
    {
        title: 'Номер подъезда',
        field: 'entranceNumber', type: 'numeric'
    },
];
const basicBFields = [
    {
        title: 'Номер телефона клиента',
        field: 'clientPhone'
    },
    {
        title: 'Проектная площадь квартиры по договору',
        field: 'totalAreaUnderContract', type: 'numeric'
    },
    {
        title: 'Проектная площадь квартиры по инвентаризации',
        field: 'totalAreaUnderInventory', type: 'numeric'
    },
];
const actWithDebtFields = [
    {
        title: 'Сумма задолженности в рублях',
        field: 'customerDebtByNumber'
    },
    {
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