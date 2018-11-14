import {DirectionFilter} from 'app/Modules/FlightsPage/Components/DirectionFilter';
import {LateFilter} from 'app/Modules/FlightsPage/Components/LateFilter';
import {NumberFilter} from 'app/Modules/FlightsPage/Components/NumberFilter';
import {EFlightDirection} from "app/Modules/FlightsPage/Consts";
import * as React from 'react';
import Paper from '@material-ui/core/Paper';

/**
 * Свойства компонента.
 *
 * @prop {Function} onDirectionChange Обработчик изменения направления.
 * @prop {Function} onNumberChange Обработчик изменения номера рейса.
 * @prop {Function} onOnlyLateChange Обработчик изменения отображения только задержанных рейсов.
 */
interface IProps {
    onDirectionChange: (direction: EFlightDirection) => void;
    onNumberChange: (number: string) => void;
    onOnlyLateChange: (onlyLate: boolean) => void;
}

/**
 * Панель фильтров.
 */
export const FlightFilterPanel: React.SFC<IProps> = ({
    onDirectionChange,
    onNumberChange,
    onOnlyLateChange
}: IProps) => (
    <Paper square className="flight-filter">
        <DirectionFilter onChange={onDirectionChange}/>
        <NumberFilter onChange={onNumberChange}/>
        <LateFilter onChange={onOnlyLateChange}/>
    </Paper>
);
