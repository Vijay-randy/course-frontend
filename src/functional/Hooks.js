 // components two types
// 1.functional components - rfc

// HOOKs
/*A hook in ReactJS is a function that lets you access React's state and 
lifecycle features from function components without writing a class. */

// useState:
// const [state, setState] = useState(initialState)


// 2.class components - rcc
import React, { useState } from 'react'
import './Hook.css'

export default function Hooks() {
    // const [name,setName] =useState("IDM TECH");
    // const changeName1=()=>{
    //     setName("IDM TECH PARK IN COIMBATORE")
    // }
    // const changeName2=()=>{
    //     setName("IDM TECH PARK IN Erode")
    // }
    const [num,setNum] =useState(0);
    const changeNum1=()=>{
        setNum((prev)=>prev+1);
    }
    // const changeName2=()=>{
    //     setName("IDM TECH PARK IN Erode")
    // }

  return (
    <div>

<h1>React is a javascript library</h1>
{/* <h3>{name}</h3>
<button onClick={changeName1}>change</button>
<button onClick={changeName2}>change</button> */}
<h3>{num}</h3>
 <button onClick={changeNum1}>change</button>{/*
<button onClick={changeName2}>change</button> */}
    </div>
  )
}


// import React, { Component } from 'react'

// export default class Hooks extends Component {
//   render() {
//     return (
//       <div>Hooks</div>
//     )
//   }
// }
