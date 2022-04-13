import "./FooterComponent.css";
import twitterIcon from "../images/twitter-icon.png";
import facebookIcon from "../images/facebook-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import githubIcon from "../images/github-icon.png";

function FooterComponent() {
  return (
    <div className="flex card-footer">
      <img src={twitterIcon}></img>
      <img src={facebookIcon}></img>
      <img src={instagramIcon}></img>
      <img src={githubIcon}></img>
    </div>
  );
}

export default FooterComponent;
