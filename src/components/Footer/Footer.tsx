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
        <FaSquareFacebook size={25} style={{ cursor: "pointer" }} />
        <FaLinkedin size={25} style={{ cursor: "pointer" }} />
        <FaSquareInstagram size={25} style={{ cursor: "pointer" }} />
        <FaGithubSquare size={25} style={{ cursor: "pointer" }} />
        <FaYoutube size={25} style={{ cursor: "pointer" }} />
      </Social>
    </StyledFooter>
  );
};

export default Footer;
