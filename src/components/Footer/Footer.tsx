import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { LuVibrate, LuVibrateOff } from "react-icons/lu";
import { Social, StyledFooter, Vibration } from "./styles";

const Footer = ({
  vibrationIsEnable,
  setVibrationIsEnable,
}: {
  vibrationIsEnable: boolean;
  setVibrationIsEnable: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSilence = () => {
    setVibrationIsEnable(!vibrationIsEnable);
  };

  const visitLinkedin = () => {
    const linkedinURL =
      "https://www.linkedin.com/in/papuna-machurishvili-722165a2";
    window.open(linkedinURL, "_blank");
  };

  const visitGithub = () => {
    const githubURL = "https://github.com/papunafshaveli/";
    window.open(githubURL, "_blank");
  };

  const visitFb = () => {
    const fbURL = "https://www.facebook.com/papunafshaveli1/";
    window.open(fbURL, "_blank");
  };

  const visitYT = () => {
    const YtURL = "https://www.youtube.com/@papunafshaveli/";
    window.open(YtURL, "_blank");
  };

  const visitInsta = () => {
    const instaURL = "https://www.instagram.com/papunart/?hl=en";
    window.open(instaURL, "_blank");
  };

  return (
    <StyledFooter>
      <Vibration onClick={handleSilence}>
        {vibrationIsEnable ? (
          <LuVibrateOff size={30} />
        ) : (
          <LuVibrate size={30} />
        )}
      </Vibration>
      <Social>
        <b>
          Papuna <br /> Fshaveli
        </b>
        <FaSquareFacebook
          size={25}
          style={{ cursor: "pointer" }}
          onClick={visitFb}
        />
        <FaLinkedin
          size={25}
          style={{ cursor: "pointer" }}
          onClick={visitLinkedin}
        />
        <FaSquareInstagram
          size={25}
          style={{ cursor: "pointer" }}
          onClick={visitInsta}
        />
        <FaGithubSquare
          size={25}
          style={{ cursor: "pointer" }}
          onClick={visitGithub}
        />
        <FaYoutube size={25} style={{ cursor: "pointer" }} onClick={visitYT} />
      </Social>
    </StyledFooter>
  );
};

export default Footer;
