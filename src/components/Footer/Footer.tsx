import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { LuVibrate, LuVibrateOff } from "react-icons/lu";
import styled from "styled-components";

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
      <Vibration>
        {vibrationIsEnable ? (
          <LuVibrateOff onClick={handleSilence} size={30} />
        ) : (
          <LuVibrate onClick={handleSilence} size={30} />
        )}
      </Vibration>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Vibration = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  cursor: pointer;
`;
