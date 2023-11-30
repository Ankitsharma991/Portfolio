import LinkedInIcon from "../assets/linkedin.png";
import TwitterIcon from "../assets/twitter.png";
import FacebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="https://www.linkedin.com/in/ankit-sharma-361467208/"
          src={LinkedInIcon}></img>
        </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="https://twitter.com/Ankitsharma_991" src={TwitterIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={FacebookIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="https://www.instagram.com/an_kit.11/" src={InstagramIcon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
