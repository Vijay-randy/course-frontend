import React, { Fragment, useState } from "react";

function counter1() {
    const [num,setNum]=useState(100);
    const decrement=()=>{
        setNum(()=>num-1)
    }

  return (
    // <Fragment>
        // {/* </Fragment> */}
    <>
    <div>
        <h1>number:{num}</h1>
        <button onClick={decrement}>decrement</button>
    </div>
    </>


  )
}
export default counter1