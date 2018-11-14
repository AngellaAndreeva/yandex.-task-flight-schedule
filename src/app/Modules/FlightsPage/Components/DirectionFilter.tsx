import {directionMap, EFlightDirection} from 'app/Modules/FlightsPage/Consts';
import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/**
 * Свойства компонента.
 *
 * @prop {Function} onChange Обработчик изменения фильтра.
 */
interface IProps {
    onChange: (direction: EFlightDirection) => void;
}

/**
 * Состояние компонента.
 *
 * @prop {EFlightDirection} direction Направление.
 */
interface IState {
    direction: EFlightDirection;
}

/**
 * Фильтр по направлениям.
 */
export class DirectionFilter extends React.Component<IProps, IState> {
    state = {
        direction: EFlightDirection.ALL
    };

    /**
     * Обработчик изменения направления.
     *
     * @param {EFlightDirection} direction Направление.
     */
    handleChange = (_, direction: EFlightDirection) => {
        this.setState({direction}, () => this.props.onChange(this.state.direction));
    };

    render() {
        return (
            <Tabs
                value={this.state.direction}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
            >
                {Object.keys(directionMap).map(direction => (
                    <Tab label={directionMap[direction]} value={direction}/>
                ))}
            </Tabs>
        );
    }
}