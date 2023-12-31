import React from "react";
import PropTypes from 'prop-types';
const CounterApp = ({value}) =>{
    return(
        <>
          <h1>CounterApp</h1>
          <h2> { value } </h2>
        </>
    );
}

CounterApp.ProtoType = {
    value: PropTypes.number.isRequired
}

export default CounterApp