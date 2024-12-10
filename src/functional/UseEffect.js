import { useEffect, useState } from "react"

export default function () {
    const [num1,setNum1]=useState(100);
    const [num2,setNum2]=useState(100);
    const [click,setClick]=useState(0);
    const increment=()=>{
        setNum1((curr=>curr+1))
    }
   
    const decrement=()=>{
        setNum2((curr=>curr-1))
    }
    useEffect(()=>{
        setClick((prev)=>prev+1)
    },[num1,num2])
    console.log(click)
  return (
    <div>
<h1>{num1}</h1>
<button onClick={increment}>increment</button>
<h1>{num2}</h1>
<button onClick={decrement}>decrement</button>
  <h1>{click}</h1> 
  <button onClick={setClick}>count</button>
    </div>
  )
}
 // useEffect accepts two arguments. 
    // useEffect(<function>, <dependency>)