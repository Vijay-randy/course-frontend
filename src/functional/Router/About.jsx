import { NavLink, useParams } from "react-router-dom";

export default function About() {

   
     const {username}=useParams()
    


  return (
    <div>
        <nav>
    <ul>
        <li>
            <NavLink to="/" >Home</NavLink>
           
           
        </li>
        <li> <NavLink to="/About" >about</NavLink></li>
        <li> <NavLink to="/Contect" >contect</NavLink></li>
    </ul>
</nav>
        
        <h1>About</h1>
        <h1>username:{username}</h1>
    </div>
  )
}