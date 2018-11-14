import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/**
 * Свойства компонента.
 *
 * @prop {Function} onChange Обработчик изменения фильтра.
 */
interface IProps {
    onChange: (onlyLate: boolean) => void;
}

/**
 * Состояние компонента.
 *
 * @prop {boolean} onlyLate Отображать только задержанные.
 */
interface IState {
    onlyLate: boolean;
}

/**
 * Фильтр отображения только задержанных рейсов.
 */
export class LateFilter extends React.Component<IProps, IState> {
    state = {
        onlyLate: false
    };

    /**
     * Обработчик изменения фильтра.
     *
     * @param event Событие.
     */
    handleChange = (event) => {
        this.setState({
            onlyLate: event.currentTarget.checked
        }, () => this.props.onChange(this.state.onlyLate));
    };

    render() {
        return (
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.onlyLate}
                            onChange={this.handleChange}
                            value="checkedA"
                            color="primary"
                        />
                    }
                    label="Только задержанные рейсы"
                />
            </div>
        );
    }
}