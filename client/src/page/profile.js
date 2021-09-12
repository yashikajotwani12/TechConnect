import React from 'react';
import '../page/profile.css';

function profile() {
    return (
        <div>
            <div className="left_dashboard">
                <div className="profile-image">
                    <img className="image" src="https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png"/>
                    <h2 className="profile-name">Profile Name</h2>
                    <h4 className="sub-name">Software Engineer</h4>
                    <h3 className="profile-title">Say Somthing</h3>
                    <p className="profile-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                </div>
                <div className="media-links">
                    <img className="icon-link" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"/>
                    <img className="icon-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    <img className="icon-link" src="https://cdn-icons-png.flaticon.com/512/20/20673.png"/>
                </div>
                
            </div>
            <div className="right_dashboard">
                <div className="info">
                </div>
                <div className="tag">
                </div>


            </div>
            
        </div>
    )
}

export default profile
