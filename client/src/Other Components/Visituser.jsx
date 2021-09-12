import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import Navbar from './Navbar';
import './profile.css';
import { UserContext } from '../App';

function Visituser() {
    const {user, setuser, userexist, setuserexist, userId, setuserId, visituser } = useContext(UserContext)
    const history = useHistory();
    return (
        <>
            <Navbar />
            <div style={{display: 'flex', width: '100%'}}>
                {/* -------left dashboard ------*/}
                <div className="left_dashboard">
                    <div className="profile-image">
                        <img className="image" src={ visituser.profileURL===''?"https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png": user.profileURL} />
                        <h2 className="profile-name">{visituser.name}</h2>
                        <h4 className="sub-name">Software Engineer</h4>
                        <h3 className="profile-title">Connect with Me</h3>
                        <div className="media-links">
                            <div className="media-link">
                                <img className="icon-link" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" />
                                <a href="#">{visituser.Socials[1]}</a>
                            </div>
                            <div className="media-link">
                                <img className="icon-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                <a href="#">{visituser.Socials[0]}</a>
                            </div>
                            <div className="media-link">
                                <img className="icon-link" src="https://cdn-icons-png.flaticon.com/512/20/20673.png" />
                                <a href="#">{visituser.Socials[2]}</a>
                            </div>
                        </div>
                    </div>


                </div>

                {/* -------right dashboard ------*/}
                <div className="right_dashboard">

                    <div className="info">
                        <div className="profile-container">
                            <h2>Profile information</h2>
                            <p> <span style={{fontWeight: '500'}}>Username:</span> {visituser.name}</p>
                            <p> <span style={{fontWeight: '500'}}>Email:</span> {visituser.email}</p>
                            <p><span style={{fontWeight: '500'}}>Birthday:</span> {visituser.Birthday}</p>
                            <p><span style={{fontWeight: '500'}}>Education: </span>{visituser.education}</p>
                            <p><span style={{fontWeight: '500'}}>Skills: </span>{visituser.skills}</p>
                            <p> <span style={{fontWeight: '500'}}>Description</span> {visituser.description}</p>
                        </div>
                    </div>
                    <div className="tag">
                    <h2 className="tag-head">My interests</h2>
                    {

                        visituser.tags.length!==0?visituser.tags.map((item)=>{
                            <li className="tag-title">{item}</li>
                        }) 
                        : null
                    }
                        {/* <li className="tag-title">C++</li>
                        <li className="tag-title">Photography</li>
                        <li className="tag-title">JavaScript</li>
                        <li className="tag-title">Camping</li>
                        <li className="tag-title">Traveling</li>
                        <li className="tag-title">Cooking</li>
                        <li className="tag-title">Dancing</li>
                        <li className="tag-title">Web Development</li>
                        <li className="tag-title">Music</li> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Visituser