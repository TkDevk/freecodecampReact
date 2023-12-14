import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//Create reference to id

/*
const root = ReactDOM.createRoot(document.getElementById('root')); // Tengo un Id root en mi index.html
root.render(
    <React.Fragment>

    </React.Fragment>
)
*/
//Functional Component
const PrimeraApp = ({saludo, ejemplo, parrafo}) => {  //const PrimeraApp = ({saludo = 'Que mas pa'})  ||const PrimeraApp = (props) => {

    //console.log(props)
    //const saludo = 'Que mas?';
    /*const obj = {
        name:'pepe',
        age:30,
    }*/

    return (
        <>
            <h1>Hola </h1>
            <p>Primer Parrafo</p>
            <p>{ saludo }</p> {/**props.saludo */}
            <p>{ ejemplo}</p>
            <p>{ parrafo}</p>
            {/* <pre>{ JSON.stringify(obj,null,3)}</pre> */}
        </>
    );
}
//Defino tipo de propiedaes
PrimeraApp.PropTypes = {
     saludo: PropTypes.string.isRequired, //this to set a mandatory value, and isRequired means that needs a value
     ejemplo: PropTypes.number.isRequired, //if i don't send args from father it will throw error due to isRequired
   
}

PrimeraApp.defaultProps = {
    parrafo: 'Soy un parrafo'//object
}


export default PrimeraApp;