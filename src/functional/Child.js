import { useState } from "react"

export default function Child(props) {
const [name,changeName]=useState("react functional coponents");
const change=()=>{
    changeName(props.content)
}
  return (
    <div>
        <h1>{name}</h1>
<button onClick={change}>onClick</button>        
    </div>
  )
}
