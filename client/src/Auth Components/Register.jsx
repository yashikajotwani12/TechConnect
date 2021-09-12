import React,{useState} from 'react'
import {Link, useHistory } from 'react-router-dom';
import "./style.css"
import login from "../images/login.png"

function Register() {
    const history = useHistory();
    const [error,seterror] = useState();
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword] = useState();
    const [cpassword,setcpassword]= useState();

    const submit = async(e)=>{

        e.preventDefault();
        const result = await fetch("http://localhost:5000/register",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
             },
             body: JSON.stringify({
                 name,email,password,cpassword
             })
        })
        if(result.status === 200){
            history.push('/login');
            window.alert('Registered Succesfully!!!');
        }
        else if(result.status === 500){
            window.alert('User Already Exist!! Login');
            history.push('/login')
        }
        else{
            const res = await result.json();
            seterror(res.message);
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
                            <div  className="input-field">
                                <h4>Username</h4>
                                <input type="text" value={name} onChange={e=>setname(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <h4>Email</h4>
                                <input type="text" value={email} onChange={e=>setemail(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <h4>Password</h4>
                                <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <h4>Confirm Password</h4>
                                <input type="password" value={cpassword} onChange={e=>setcpassword(e.target.value)} />
                            </div>
                        </div>
                        <button className="button-1" onClick={submit} >Register</button>
                        {/* <span className="message-log">{error}</span> */}
                        <span className="message-log">Already Register? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
