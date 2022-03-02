import React from 'react'
const Counter =(props)=>{
    return <div>
        <p>
            {props.count}
        </p>
        <button onClick={props.onAdd}>add 1</button>
    </div>
}
export default Counter