import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddResetDec = ( {value=0})=>{
    
    const [counter, setCounter ] = useState(value)

    const handleAdd = ()=>{
        setCounter(counter+1)
        
    }

    const handleReduce = ()=>{
        setCounter(counter-1)
    }

    const handleReset = ()=>{
        setCounter(value)
    }
    
      return(
        <article>
            <h1> Add,Reduce or Reset your value</h1>
            <p> {counter} </p>
            <button onClick={handleAdd}> +1</button>
            <button onClick={handleReset} >Reset</button>
            <button onClick={handleReduce}>-1</button>
        </article>
      );
}



export default AddResetDec