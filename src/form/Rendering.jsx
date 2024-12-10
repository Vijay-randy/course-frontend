 import React, { useState } from "react"
 function Rendering() {
     const [loggIn,setLoggin]=useState(true);
     function handleLogin(){
         setLoggin(false)
     }
  return (
    <div>

<div>
    {loggIn?"welcome":"please login"}
    <button onClick={handleLogin}>login</button>
</div>
    </div>
  )
}
export default Rendering