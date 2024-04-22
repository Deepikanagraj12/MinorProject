import "./profile.scss";
import dummypProfile from "../../assets/dummyProfile.jpg";
import banner from "../../assets/banner.png";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import SchoolIcon from '@mui/icons-material/School';

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src={banner} alt=""
          className="cover"
        />
        <img
          src={dummypProfile}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">

      <div>
        <div className="uInfo">
          <div className="left">
            <a href="http://github.com">
              <GitHubIcon fontSize="large" />
            </a>
            {/* <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a> */}
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            {/* <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a> */}
          </div>
          <div className="center">
            <span>Chirag Hira</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span className="city">Bhopal   </span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>ChiragHira@gmail.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
         
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
       
        </div>
        </div>
      <Posts/>
      </div>

    </div>
  );
};

export default Profile;
