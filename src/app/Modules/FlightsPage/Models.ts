import {EFlightDirection, EFlightStatus} from 'app/Modules/FlightsPage/Consts';

/**
 * Фильтр рейсов.
 *
 * @prop {EFlightDirection} [direction] Направление.
 * @prop {string} [number] Номер рейса.
 * @prop {boolean} [onlyLate] Только задержанные.
 */
export interface IFlightFilter {
    direction?: EFlightDirection;
    number?: string;
    onlyLate?: boolean;
}

/**
 * Интерфейс данных о полете.
 *
 * @prop {string} planTime Запланированное время.
 * @prop {string} number Номер рейса.
 * @prop {string} company Компания.
 * @prop {EFlightDirection} direction Направление.
 * @prop {EFlightStatus} status Статус.
 * @prop {string} time Фактическое время.
 * @prop {boolean} late Флаг задержки рейса.
 */
export interface IFlight {
    planTime: string;
    number: string;
    company: string;
    direction: EFlightDirection;
    status: EFlightStatus;
    time: string;
    late: boolean;
}
