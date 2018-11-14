import {FlightFilterPanel} from 'app/Modules/FlightsPage/Components/FlightFilterPanel';
import {FlightsTable} from 'app/Modules/FlightsPage/Components/FlightsTable';
import {IFlightFilter} from 'app/Modules/FlightsPage/Models';
import * as React from 'react';

require('./FlightsPage.css');

/**
 * Состояние компонента.
 *
 * @prop {IFlightFilter} filter Фильтр рейсов.
 */
interface IState {
    filter: IFlightFilter;
}

/**
 * Компонент страницы со списком рейсов.
 */
export class FlightsPage extends React.Component<{}, IState> {
    state = {
        filter: {}
    };

    /**
     * Фабрика обработчиков изменения фильтра.
     * Нужна мемоизация (lodash.memoize).
     *
     * @param {string} field Изменяемое поле.
     */
    handleFilterChangeFactory = (field: string) => (value) => {
        this.setState({
            filter: {
                ...this.state.filter,
                [field]: value
            }
        });
    };

    render () {
        return (
            <div>
                <FlightFilterPanel
                    onDirectionChange={this.handleFilterChangeFactory('direction')}
                    onNumberChange={this.handleFilterChangeFactory('number')}
                    onOnlyLateChange={this.handleFilterChangeFactory('onlyLate')}
                />
                <FlightsTable
                    filter={this.state.filter}
                />
            </div>
        );
    }
}
