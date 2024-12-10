import React, { useState } from 'react';



function Checkbox() {
 const [like, setLike]=useState(false)

 function myChange(e){
    setLike(e.target.value)
 }

  return (
    <div>
      <form>
        <input  type='checkbox'
        checked={like}  onChange={myChange} />
        <p>I {like?"like":"did not like"} </p>
      </form>
    </div>
  )
}

export default Checkbox