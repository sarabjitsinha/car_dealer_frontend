import {Link} from "react-router-dom"
import { mycontext } from "../../utils/Myprovider"
import { useContext, useEffect } from "react"

export default function Header(){
    const token=localStorage.getItem("token")
    const {user,setuser}=useContext(mycontext)
useEffect(()=>{

},[user])

    function handleLogout(){
        localStorage.removeItem("useron")
        localStorage.removeItem("token")
        setuser(null)
    }
    return(
        <nav className="list-none flex justify-evenly">
            <Link to="/cars"> Home </Link>
            <Link to="/cars">CarList</Link>
            <Link to="/admin">Admin</Link>
            {token ? <button className="hover:cursor-pointer" onClick={handleLogout}>Logout</button>:<Link to="/login">Login</Link>}
        </nav>
    )
}