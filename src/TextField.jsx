import { use, useState } from "react"

export default function TextField() {
    const [input,setInput]=useState(" ");
 
    function handleChange(e){
setInput(e.target.value)
    }

    

  return (
    <div>

        <form>
            <label>firstName</label>
            <input type="text" 
            value={input} onChange={handleChange}
            />
            <p>Input value:{input}</p>
            <button onClick={() => setInput('')}>
        Reset
      </button>
   
        </form>
    </div>
  )
}