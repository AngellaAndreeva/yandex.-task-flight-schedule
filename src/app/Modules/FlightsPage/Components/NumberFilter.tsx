import * as React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

/**
 * Свойства компонента.
 *
 * @prop {Function} onChange Обработчик изменения фильтра.
 */
interface IProps {
    onChange: (number: string) => void;
}

/**
 * Состояние компонента.
 *
 * @prop {string} number Номер рейса.
 */
interface IState {
    number: string;
}

/**
 * Компонент фильтра по номеру рейса.
 */
export class NumberFilter extends React.Component<IProps, IState> {
    state = {
        number: ''
    };

    /**
     * Обработчик изменения номера.
     *
     * @param event Событие.
     */
    handleChange = (event) => {
        this.setState({number: event.currentTarget.value});
    };

    /**
     * Обработчик применения фильтра.
     */
    handleApply = () => {
        this.props.onChange(this.state.number);
    };

    render() {
        return (
            <div>
                <Input
                    placeholder="Номер рейса"
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <Button
                    onClick={this.handleApply}
                >
                    Искать
                </Button>
            </div>
        );
    }
}