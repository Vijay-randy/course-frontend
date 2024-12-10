import { Link, NavLink } from "react-router-dom";
import Contect from "./Contect";

export default function Home() {
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

        <NavLink/>
        <h1>home</h1>
        <a href="About">about</a> 
       
        <br/>
        <Link to="/Contect">contect</Link>
        {/* <a href="Contect">contect</a> */}
    </div>
  )
}