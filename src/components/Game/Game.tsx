import styled from "styled-components";
import Rock from "../../icons/Rock";
import Paper from "../../icons/Paper";
import Scissors from "../../icons/Scissors";
import { useCalculateResult } from "../../hooks/useCalculateResult";
import { Dispatch, SetStateAction } from "react";

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
  const somth = useCalculateResult;
  const randomizer = Math.floor(Math.random() * 3);

  const onRockClick = () => {
    setIcon(<Rock />);
    setCompIcon(computerIcons[randomizer]);
    setResult(
      somth({ myChoice: 0, compChoice: randomizer, setMyScore, setCompScore })
    );
  };

  const onPaperClick = () => {
    setIcon(<Paper />);
    setCompIcon(computerIcons[randomizer]);
    setResult(
      somth({ myChoice: 1, compChoice: randomizer, setMyScore, setCompScore })
    );
  };

  const onScissorsClick = () => {
    setIcon(<Scissors />);
    setCompIcon(computerIcons[randomizer]);
    setResult(
      somth({ myChoice: 2, compChoice: randomizer, setMyScore, setCompScore })
    );
  };
  return (
    <GameContainer>
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
        {icon}
        {compIcon}
      </Challenge>
      {result}
    </GameContainer>
  );
};

export default Game;

const GameContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const YouAndComputer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const You = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h3 {
    font-size: 1.8rem;
  }
`;

const RockWrapper = styled.div`
  width: 50px;
  cursor: pointer;
`;
const PaperWrapper = styled.div`
  width: 50px;
  cursor: pointer;
`;
const ScissorsWrapper = styled.div`
  width: 50px;
  cursor: pointer;
`;

const Computer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 85px;

  h3 {
    font-size: 1.8rem;
  }

  span {
    font-size: 1.8rem;
    padding: 20px 25px;
    background-color: goldenrod;
    border-radius: 50%;
  }
`;

const Challenge = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
