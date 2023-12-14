import React from 'react';
import ReactDOM  from 'react-dom/client';
import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp';
import Events from './Events';
import PrimerHook from './UseState';

import './main.css';
import AddResetDec from './AddResetDec';

const root = ReactDOM.createRoot(document.getElementById('root')); // Tengo un Id root en mi index.html
root.render(
    <React.Fragment>
        <PrimeraApp saludo="cc09" ejemplo={123}/> {/**PrimeraApp saludo="Que mas pa" */}
        <CounterApp value={2000} />
        <Events />
        <PrimerHook />
        <AddResetDec />
    </React.Fragment>
)