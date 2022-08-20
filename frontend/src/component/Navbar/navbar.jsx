import { Link } from "react-router-dom"
import "./navbar.css"


export const Navbar = () => {
    return <div className="navcont">
        <div className="navchild">
        <div><Link to={"/"}>Register</Link></div>
        <div><Link to={"/login"}>Login</Link></div>
        <div><Link to={"/admin"}>Admin</Link></div>
        </div>
    </div>
}