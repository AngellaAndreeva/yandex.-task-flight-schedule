/**
 * Список направлений полетов.
 *
 * ALL - Все.
 * DEPARTIRE - Вылет.
 * ARRIVAL - Прилет.
 */
export enum EFlightDirection {
    ALL = 'ALL',
    DEPARTURE = 'DEPARTURE',
    ARRIVAL = 'ARRIVAL'
}

/**
 * Соответствие направления и текста.
 */
export const directionMap = {
    [EFlightDirection.ALL]: 'Все',
    [EFlightDirection.DEPARTURE]: 'Прилет',
    [EFlightDirection.ARRIVAL]: 'Вылет'
};

/**
 * Список статусов рейсов.
 *
 * READY_TO_GO - Готов к взлету.
 * REGISTRATION - Регистрация.
 */
export enum EFlightStatus {
    READY_TO_GO = 'READY_TO_GO',
    REGISTRATION = 'REGISTRATION'
}

/**
 * Соответствие статусов и текста.
 */
export const flightStatusMap = {
    [EFlightStatus.READY_TO_GO]: 'Готов к взлету',
    [EFlightStatus.REGISTRATION]: 'Регистрация'
};

/**
 * Конфиг колонки таблицы.
 *
 * @prop {string} label Отображаемый текст.
 * @prop {string} name Название свойства.
 * @prop {Function} [cellRender] Функция для кастомного отображения содержимого ячейки.
 */
interface IColumnConfig {
    label: string;
    name: string;
    cellRender?: (label: string) => string;
}

/**
 * Конфиг колонок для таблицы рейсов.
 */
export const columnConfig: IColumnConfig[] = [
    {
        label: 'Время по расписанию',
        name: 'planTime'
    },
    {
        label: '№ рейса',
        name: 'number'
    },
    {
        label: 'Авиакомпания',
        name: 'company'
    },
    {
        label: 'Направление',
        name: 'direction',
        cellRender: (value: string): string => directionMap[value]
    },
    {
        label: 'Статус',
        name: 'status',
        cellRender: (value: string): string => flightStatusMap[value]
    },
    {
        label: 'Ожидаемое время',
        name: 'time'
    }
];