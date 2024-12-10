// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useEffect, useRef, useState } from 'react'
// export default function Bootstrap1() {
//     const [name,setName]=useState(" ")
//     const num=useRef(0);
//     useEffect(()=>num.current=num.current+1)

//   return (
//     <div className="container">
//          <h1 className="text-warning">hello</h1>
//         <h3 className='bg-primary'>react</h3>
//         <label htmlFor="firstname">First name</label>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <h1>Rendering:{num.current}</h1>
//     </div>
//   )
// }
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useRef, useState } from 'react'

export default function Bootstrap1() {
    const [name, setName] = useState("");  // for the input value
    const num = useRef(0);  // To track render count
    
    useEffect(() => {
        num.current = num.current + 1;  // Increment num on each render
    });
console.log(num.current)
    return (
        <div className="container">
            <h1 className="text-warning">hello</h1>
            <h3 className="bg-primary">react</h3>
            <label htmlFor="firstname">First name</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <h1>Rendering: {num.current}</h1>
        </div>
    );
}
