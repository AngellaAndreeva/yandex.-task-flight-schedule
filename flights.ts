import {EFlightDirection, EFlightStatus} from 'app/Modules/FlightsPage/Consts';
import {IFlight} from 'app/Modules/FlightsPage/Models';

/**
 * Список рейсов.
 */
export const flights: IFlight[] = [
    {
        planTime: '02:20',
        number: 'DP-551',
        company: 'Победа',
        direction: EFlightDirection.DEPARTURE,
        status: EFlightStatus.READY_TO_GO,
        time: '03:20',
        late: true
    },
    {
        planTime: '03:30',
        number: 'ZF-9693',
        company: 'AzurAir',
        direction: EFlightDirection.ARRIVAL,
        status: EFlightStatus.READY_TO_GO,
        time: '03:20',
        late: false
    }
];
