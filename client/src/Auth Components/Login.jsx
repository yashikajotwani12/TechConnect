import React, { useState, useContext } from 'react'
import {Link, useHistory } from 'react-router-dom';
import "./style.css"
import login from "../images/login.png"
import axios from "axios"
import { UserContext } from '../App';

function Login() {
    const {user, setuser, userexist, setuserexist, userId, setuserId } = useContext(UserContext)
    const history = useHistory();
    const [error, seterror] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const submit = async (e) => {

        e.preventDefault();
        const res = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        if (res.status === 200) {
            const result = await res.json();
            setuser(result.user);
            setuserexist(true);
            setuserId(result.user._id)
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('userexist', 'true');
            localStorage.setItem('userId', result.user._id);
            history.push('/Home')
        } else {
            const result = await res.json();
            seterror(result.message);
        }
    }
    return (
        <div>
            <div className="login">
                <div className="container-lr">
                    <div className="left">
                        <h3 className="heading">TechConnect</h3>
                        <img src={login} alt="" style={{width: '25rem'}} />
                        {/* <p className="para">Make your algorithm, website or any flowchart, save it in a project and download!</p><br /> */}
                        {/* <p className="para">Connect with peers!</p><br /> */}
                    </div>
                    <div className="right">
                        <h3>Welcome</h3>
                        <h4>Login to your account</h4>
                        <div className="input_container">
                            <div className="input-field">
                                <h4>Username</h4>
                                <input type="text" value={email} onChange={e=>setemail(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <h4>Password</h4>
                                <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
                            </div>
                        </div>
                        <button className="button-1" onClick={submit} >Login</button>
                        <span className="message-log">{error}</span>
                        <span className="message-log">Not Register? <Link to="/register">Register</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
