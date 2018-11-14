import {columnConfig, EFlightDirection} from 'app/Modules/FlightsPage/Consts';
import {IFlightFilter} from 'app/Modules/FlightsPage/Models';
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {flights} from '../../../../../flights';

/**
 * Свойства компонента.
 *
 * @prop {IFlightFilter} filter Фильтр.
 */
interface IProps {
    filter: IFlightFilter;
}

/**
 * Панель фильтрации.
 */
export const FlightsTable: React.SFC<IProps> = (props: IProps) => {
    const {filter: {direction, number, onlyLate}} = props;

    const filteredFlights = flights.filter((flight) => {
        if (direction && direction !== EFlightDirection.ALL && direction !== flight.direction) {
            return false;
        }

        if (number && flight.number.indexOf(number) === -1) {
            return false;
        }

        if (onlyLate && !flight.late) {
            return false;
        }

        return true;
    });

    return (
        <Paper square>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            columnConfig.map(({label}) => (
                                <TableCell>{label}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredFlights.map((row, index) => (
                            <TableRow key={index}>
                                {
                                    columnConfig.map(({name, cellRender}) => (
                                        <TableCell>
                                            {
                                                cellRender ?
                                                    cellRender(row[name]) :
                                                    row[name]
                                            }
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            {!filteredFlights.length && (
                <div className="not-found">
                    Не найдены рейсы по заданным параметрам
                </div>
            )}
        </Paper>
    );
};
