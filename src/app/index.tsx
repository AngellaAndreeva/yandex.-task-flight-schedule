import {FlightsPage} from 'app/Modules/FlightsPage/FlightsPage';
import * as React from 'react';
import {hot} from 'react-hot-loader';

/**
 * Точка старта приложения.
 */
const App: React.SFC = (): JSX.Element => (
    <FlightsPage/>
);

const hotApp = hot(module)(App);

export {hotApp as App};
