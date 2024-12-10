import React, { Fragment, useState } from "react";

function counter() {
    const [num,setNum]=useState(100);
    const increment=()=>{
        setNum(()=>num+1)
    }

  return (
    // <Fragment>
        // {/* </Fragment> */}
    <>
    <div>
        <h1>number:{num}</h1>
        <button onClick={increment}>increment</button>
    </div>
    </>


  )
}
export default counter