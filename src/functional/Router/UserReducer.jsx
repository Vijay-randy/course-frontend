import React from "react";
import { useReducer } from "react"

const initial={count:0}

function reducer(state,action){
    switch(action.type){
        case 'increament':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
            default:
                return state;
    }  
}


export default function UserReducer() {
    const[state,dispatch]=useReducer(reducer,initial)

  return (

    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:'increament'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
    </div>
  )
}