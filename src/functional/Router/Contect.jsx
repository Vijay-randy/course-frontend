import { NavLink } from "react-router-dom";

export default function Contect() {
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
        <h1>contact</h1>
    </div>
  )
}