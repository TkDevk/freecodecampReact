import React from "react";
//{} to extract a main thing
import { useState } from "react"

const PrimerHook = ()=>{

    const [ counter, setCounter ] = useState(0); // When i call counter i'm calling the arg
    console.log(counter)

    const Count = ()=>{
       setCounter( counter+1);
       // setCounter ( (c)=> c+1);
    }

    return (
        <article>
            <h2> First Hook</h2>
            <p> Baby Steps</p>
            <p> {counter} to 100 </p>
            <button onClick= {Count}> + </button>

        </article>
    );

}

export default PrimerHook