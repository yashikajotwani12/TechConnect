import React from "react";
import "./profile.css";

function profile() {
  return (
    <div>
      {/* -------left dashboard ------*/}
      <div className="left_dashboard">
        <div className="profile-image">
          <img
            className="image"
            src="https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png"
          />
          <h2 className="profile-name">Profile Name</h2>
          <h4 className="sub-name">Software Engineer</h4>
          <h3 className="profile-title">Say Somthing</h3>
          <p className="profile-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="media-links">
          <img
            className="icon-link"
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
          />
          <img
            className="icon-link"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <img
            className="icon-link"
            src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
          />
        </div>
      </div>

      {/* -------right dashboard ------*/}
      <div className="right_dashboard">
        <div className="info">
          <div className="profile-container">
            <h2>Profile information</h2>
            <p>First name: Firesname Lastname</p>
            <p>Username: Name2021</p>
            <p>Birthday: 11/01/2001</p>
            <p>
              Education: <br />
              School Name1 <br />
              <i>Degree / Mayjor | Year</i>
            </p>
            <p>
              Skill: HTML5, CSS, JavaScript, React, JSON, Ajax, NodeJS, PHP,
              C++, Java, Python
            </p>
          </div>

          <div className="profile-container">
            <h2>Contact information</h2>
            <p>Email: teach_together@hackathon.com</p>
            <p>Phone: +1 (999) - 999 - 9999</p>
            <p>Zipcode: 11111</p>
          </div>
        </div>

        <div className="tag">
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

        <div className="">
          <li className="buttons">
            <button className="save-button">save</button>
          </li>
          <li className="buttons">
            <button className="cancel-button">cancel</button>
          </li>
        </div>
      </div>
    </div>
  );
}

export default profile;
