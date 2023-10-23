import ReactDOM from 'react-dom/client'
import React from 'react'; 
import './index.css'
import PropTypes from 'prop-types'
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return(
     
   <article>
    <CompFunction quantity={30}/>
    </article>
  );
}
}

/**I get it that i have to create a component in a diferent file */

const CompFunction=(props)=>{
  return <h1> Holaaa {props.quantity}</h1>
}


CompFunction.defaultProps={
  quantity:0
};
CompFunction.propTypes = {
  quantity: PropTypes.number.isRequired
}

const root = ReactDOM.createRoot(document.getElementById('root')); //React Dom can modify dom
root.render(<MyComponent />)

//This is a stateless component