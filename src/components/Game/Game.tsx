import Rock from "../../icons/Rock";
import Paper from "../../icons/Paper";
import Scissors from "../../icons/Scissors";
import { useCalculateResult } from "../../hooks/useCalculateResult";
import { Dispatch, SetStateAction } from "react";
import {
  Challenge,
  CompsIcon,
  Computer,
  GameContainer,
  MyIcon,
  PaperWrapper,
  ResultText,
  RockWrapper,
  ScissorsWrapper,
  You,
  YouAndComputer,
} from "./styles";

type GameProps = {
  icon: JSX.Element | null;
  setIcon: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
  compIcon: JSX.Element | null;
  setCompIcon: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
  result: string;
  setResult: (val: string) => void;
  setMyScore: Dispatch<SetStateAction<number>>;
  setCompScore: Dispatch<SetStateAction<number>>;
};

const computerIcons = [<Rock />, <Paper />, <Scissors />];

const Game: React.FC<GameProps> = ({
  icon,
  setIcon,
  compIcon,
  setCompIcon,
  result,
  setResult,
  setMyScore,
  setCompScore,
}) => {
  const calculateWrapper = useCalculateResult;
  const randomizer = Math.floor(Math.random() * 3);

  const onRockClick = () => {
    handleVibrate();
    setIcon(<Rock />);
    setCompIcon(computerIcons[randomizer]);
    setResult(
      calculateWrapper({
        myChoice: 0,
        compChoice: randomizer,
        setMyScore,
        setCompScore,
      })
    );
  };

  const onPaperClick = () => {
    handleVibrate();
    setIcon(<Paper />);
    setCompIcon(computerIcons[randomizer]);
    setResult(
      calculateWrapper({
        myChoice: 1,
        compChoice: randomizer,
        setMyScore,
        setCompScore,
      })
    );
  };

  const onScissorsClick = () => {
    handleVibrate();
    setIcon(<Scissors />);
    setCompIcon(computerIcons[randomizer]);
    setResult(
      calculateWrapper({
        myChoice: 2,
        compChoice: randomizer,
        setMyScore,
        setCompScore,
      })
    );
  };

  const isVibrationSupported = () => {
    return "vibrate" in navigator;
  };

  const handleVibrate = () => {
    if (isVibrationSupported()) {
      navigator.vibrate(100);
    }
  };

  return (
    <GameContainer>
      <ResultText result={result}>{result}</ResultText>
      <YouAndComputer>
        <You>
          <h3>You</h3>
          <RockWrapper onClick={onRockClick}>
            <Rock />
          </RockWrapper>
          <PaperWrapper onClick={onPaperClick}>
            <Paper />
          </PaperWrapper>
          <ScissorsWrapper onClick={onScissorsClick}>
            <Scissors />
          </ScissorsWrapper>
        </You>

        <Computer>
          <h3>computer</h3>
          <span>?</span>
        </Computer>
      </YouAndComputer>
      <Challenge>
        <MyIcon>{icon}</MyIcon>
        <CompsIcon>{compIcon}</CompsIcon>
      </Challenge>
    </GameContainer>
  );
};

export default Game;
