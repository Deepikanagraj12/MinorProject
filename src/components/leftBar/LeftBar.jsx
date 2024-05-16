import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import "./leftBar.scss"; // Assuming you have SCSS styles
import { AuthContext } from "../../context/authContext";
import Home from "../../assets/home-button.png";
import Groups from "../../assets/group.png";
import Friends from "../../assets/Friends.png";
import Message from "../../assets/Message.png";
import Notification from "../../assets/Notification.png";
import setting from "../../assets/settings.png";
// import Event from "../../assets/Event.png";
import discover from "../../assets/discover.png";
import megaphone from "../../assets/megaphone.png";

const LeftBar = () => {
  // Accessing the current user from AuthContext
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="leftBar">
      <div className="container">
        {/* User Profile Section */}
        {/* <div className="user">
          <img src={currentUser.profilePic} alt="Profile" />
          <span>{currentUser.name}</span>
        </div> */}

        {/* Main Menu */}
        <div className="menu">
          <span>Main Menu</span>
          <div className="user">
          <img src={currentUser.profilePic} alt="Profile" />
          <span>Akshat Sharma</span>
        </div>
          <div className="item">
            <img src={Home} alt="Home" />
            <Link to="/" className="link">
              <span>Home</span>
            </Link>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <Link to="/connection" className="link">
              <span>Connections</span>
            </Link>
          </div>
          {/* <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div> */}
          <div className="item">
            <img src={Message} alt="Messages" />
            <Link to="/message" className="link">
              <span>Messages</span>
            </Link>
          </div>
          <div className="item">
            <img src={Notification} alt="Notifications" />
            <span>Notifications</span>
          </div>
          <div className="item">
            <img src={setting} alt="Settings" />
            <span>Settings</span>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="menu">
          <span className="alumini">Alumini Section</span>
          {/* <div className="item">
            <img src= {Event} alt="Events" />
            <span>Events</span>
          </div> */}
          <div className="item">
            <img src={discover} alt="Discover" />
            <Link to="/discover" className="link">
              <span>Discover</span>
            </Link>
          </div>
          <div className="item">
            <img src={megaphone} alt="Updates" />
            <span>Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
