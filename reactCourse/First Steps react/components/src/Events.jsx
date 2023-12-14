//import React from "react";
//import PropTypes from 'prop-types'
import './event.css'
const Events = () => {

    const handleEvent = (e) =>{
           console.log(e) //return undefined
    }

    return (
        <article> 
        <h1> Manejando Eventos</h1>
         <button onClick={ handleEvent } > Event button </button>

        </article>
    );

}

export default Events