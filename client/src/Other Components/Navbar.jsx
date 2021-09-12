import React,{useContext} from 'react'
import logo from "../images/logo.png"
import "./navbar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';
import { UserContext } from '../App';
function Navbar() {
    const {user, setuser, userexist, setuserexist, userId, setuserId } = useContext(UserContext)
    const history = useHistory();
    const logout = async()=>{
        await setuser(null);
        await setuserexist(false);
        localStorage.setItem('user', null);
        localStorage.setItem('userexist', false);
        await setuserId(null);
    }
    return (
        <div className="mainNavbar">
            <div className="left">
                <img src={logo} alt="" />
                <h2 onClick={()=>history.push('/Home')} >TechConnect</h2>
            </div>
            <div className="mid"></div>
            <div className="right" style={{cursor: 'pointer'}} >
                <h3 onClick={()=>history.push('/user_profile')}>{user.name?user.name:null}</h3>
                <AccountCircleIcon />
                <button className="Bprimary" onClick={logout} >Logout</button>
            </div>
        </div>
    )
}

export default Navbar
