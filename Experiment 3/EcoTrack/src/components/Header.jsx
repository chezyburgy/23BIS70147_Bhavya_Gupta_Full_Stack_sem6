import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header=()=>{
  const {isLoggedIn}=useAuth();
  return(
    <header style={{padding:'1rem',backgroundColor:'lightblue',color:'black'}}>
      <h1>Eco-Track</h1>
      <nav>
        <Link to="/" >Dashboard</Link>{" | "}
        <Link to="/logs" >Logs</Link>{" | "}
        <Link to="/login" >Login</Link>{" | "}
        <Link to="/logout" >Logout</Link>
      </nav>
    </header>
  )
}
export default Header;