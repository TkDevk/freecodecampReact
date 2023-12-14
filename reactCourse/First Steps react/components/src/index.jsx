import React from 'react';
import ReactDOM  from 'react-dom/client';
import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp';

import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Tengo un Id root en mi index.html
root.render(
    <React.Fragment>
        <PrimeraApp saludo="Lok" ejemplo={123}/> {/**PrimeraApp saludo="Que mas pa" */}
        <CounterApp value={2000} />
    </React.Fragment>
)