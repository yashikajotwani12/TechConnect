import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import Navbar from './Navbar';
import './profile.css';
import { UserContext } from '../App';

function Profile() {
    const {user, setuser, userexist, setuserexist, userId, setuserId } = useContext(UserContext)
    const history = useHistory();
    return (
        <>
            <Navbar />
            <div style={{display: 'flex', width: '100%'}}>
                {/* -------left dashboard ------*/}
                <div className="left_dashboard">
                    <div className="profile-image">
                        <img className="image" src={ user.profileURL===''?"https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png": user.profileURL} />
                        <h2 className="profile-name">{user.name}</h2>
                        <h4 className="sub-name">{user.position}</h4>
                        <h3 className="profile-title">Connect with Me</h3>
                        <div className="media-links">
                            <div className="media-link">
                                <img className="icon-link" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" />
                                <a href="#">{user.Socials[1]}</a>
                            </div>
                            <div className="media-link">
                                <img className="icon-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                <a href="#">{user.Socials[0]}</a>
                            </div>
                            <div className="media-link">
                                <img className="icon-link" src="https://cdn-icons-png.flaticon.com/512/20/20673.png" />
                                <a href="#">{user.Socials[3]}</a>
                            </div>
                        </div>
                    </div>


                </div>

                {/* -------right dashboard ------*/}
                <div className="right_dashboard">

                    <div className="info">
                        <div className="profile-container">
                            <h2>Profile information</h2>
                            <p> <span style={{fontWeight: '500'}}>Username:</span> {user.name}</p>
                            <p> <span style={{fontWeight: '500'}}>Email:</span> {user.email}</p>
                            <p><span style={{fontWeight: '500'}}>Birthday:</span> {user.Birthday}</p>
                            <p><span style={{fontWeight: '500'}}>Education: </span>{user.education}</p>
                            <p><span style={{fontWeight: '500'}}>Skills: </span>{user.skills}</p>
                            <p> <span style={{fontWeight: '500'}}>Description</span> {user.description}</p>
                        </div>
                    </div>
                    <div className="tag">
                        <button className="save-button" onClick={()=>history.push('/edit_profile')} >Edit My Profile</button>
                        <h2 className="tag-head">My interests</h2>
                        <li className="tag-title">C++</li>
                        <li className="tag-title">Photography</li>
                        <li className="tag-title">JavaScript</li>
                        <li className="tag-title">Camping</li>
                        <li className="tag-title">Traveling</li>
                        <li className="tag-title">Cooking</li>
                        <li className="tag-title">Dancing</li>
                        <li className="tag-title">Web Development</li>
                        <li className="tag-title">Music</li>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile