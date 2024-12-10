import React, { useState } from "react"
export default function Submission() {
    const styleForm={
        margin:"100px 300px",
        backgroundColor:"blue",
        color:"white",
        padding:"150px"
    }
    const [input,setInput]=useState("");
    const [error,setError]=useState("")
    function handleChange(e){
        setInput(e.target.value)
    }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(input==""){
        // alert("fill the field")
        setError("error")
    }
    else{
        alert("thank you..!!!submited your name")
    }
   
  }
  return (
    <div>
        <form style={styleForm} onSubmit={handleSubmit}>
            <label htmlFor="name" style={{fontSize:"30px"}}>Name</label>
            <input type="text" 
            style={{margin:"0px 20px",padding:"20px 30px"}}
            value={input}
            onChange={handleChange}/>
            <p>my name is: <span  style={{color:"yellow", fontFamily:"monospace",fontSize:"20px",
                textTransform:"uppercase" }}>{input} </span></p>
            <p style={{color:"Red", fontFamily:"monospace",fontSize:"20px",
                textTransform:"uppercase" }}>{error}</p>
                <button type="submit" 
                style={{padding:"10px 40px", backgroundColor:"tomato" ,color:"white"}}>submit</button>
        </form>

    </div>
  )
}