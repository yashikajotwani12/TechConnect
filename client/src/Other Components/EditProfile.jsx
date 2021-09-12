import React, { useState , useContext, useEffect} from 'react'
import Navbar from './Navbar'
import "./editprofile.css"
import { UserContext } from '../App';
import axios from "axios"
import { useHistory } from 'react-router';
function EditProfile() {
    const history = useHistory('');
    const {user, setuser, userexist, setuserexist, userId, setuserId } = useContext(UserContext)
    const [profileURL,setprofileURL] = useState('');
    const [name,setName] = useState('');
    const [position,setposition] = useState('');
    const [description,setdescription] = useState('');
    const [education,seteducation] = useState('');
    const [skills,setskills] = useState('');
    const [Birthday,setBirthday] = useState('');
    const [github,setgithub] = useState('');
    const [linkedin,setlinkedin] = useState('')
    const [facebook,setfacebook] = useState('')
    const [instagram,setinstagram] = useState('')
    const [portfolio,setportfolio] = useState('');
    const [Socials,setSocials] = useState([])
    const [tags,settags] = useState([]);

    useEffect(()=>{
        setName(user.name);
        setprofileURL(user.profileURL)
        setposition(user.position)
        setdescription(user.description)
        seteducation(user.education)
        setskills(user.skills)
        setBirthday(user.Birthday)
        setgithub(user.Socials[0])
        setlinkedin(user.Socials[1])
        setfacebook(user.Socials[2])
        setinstagram(user.Socials[3])
        setportfolio(user.Socials[4])
    },[])

    const save = async ()=>{
        Socials.push(github);
        Socials.push(linkedin);
        Socials.push(facebook);
        Socials.push(instagram);
        Socials.push(portfolio);
        console.log(user._id)
        const newuser = await axios.patch(`http://localhost:5000/updateMyProfile/${user._id}`,{profileURL,name,position,description,education,skills,Birthday,Socials,tags});
        console.log(newuser);
        setuser(newuser.data.user)
        localStorage.setItem('user', JSON.stringify(newuser.data.user))
        history.push('/user_profile')
    }
    return (
        <>
        <Navbar />
            <h3 className="top-heading-edit" >Edit my Profile</h3>
            <div className="edit-profile">
            <div className="input-field-edit">
                <h2>Profile Image</h2>
                <input type="text" value={profileURL} onChange={e=>setprofileURL(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Name</h2>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="input-field-edit">
                <h2>Position</h2>
                <input type="text" value={position} onChange={e=>setposition(e.target.value)}/>
            </div>
            <div className="input-field-edit">
                <h2>Github Link</h2>
                <input type="text" value={github}  onChange={e=>setgithub(e.target.value)}/>
            </div>
            <div className="input-field-edit">
                <h2>LinkedIn Link</h2>
                <input type="text" value={linkedin} onChange={e=>setlinkedin(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Instagram Link</h2>
                <input type="text" value={instagram} onChange={e=>setinstagram(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Facebook Link</h2>
                <input type="text" value={facebook} onChange={e=>setfacebook(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Portfolio Link</h2>
                <input type="text" value={portfolio} onChange={e=>setportfolio(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Education</h2>
                <input type="text" value={education} onChange={e=>seteducation(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Birthday</h2>
                <input type="text" value={Birthday} onChange={e=>setBirthday(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Skills</h2>
                <textarea type="text" value={skills} onChange={e=>setskills(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Description</h2>
                <textarea type="text" value={description} onChange={e=>setdescription(e.target.value)} />
            </div>
            <div className="input-field-edit">
                <h2>Interest (*Seperate by ',') </h2>
                <textarea type="text" value={tags} onChange={e=>settags(e.target.value)} />
            </div>
            <button className="save-button" style={{marginBottom: '3rem'}} onClick={save} >Save</button>
        </div>
        </>
    )
}

export default EditProfile
