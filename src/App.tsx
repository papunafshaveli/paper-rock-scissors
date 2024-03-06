import styled from "styled-components";
import "./App.css";
import Game from "./components/Game/Game";
import { useState } from "react";

function App() {
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [compIcon, setCompIcon] = useState<JSX.Element | null>(null);
  const [result, setResult] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  return (
    <AppContainer>
      <Header>
        <h1>Rock Paper Scissors</h1>
        <Results>
          <p>
            <WinScore>{myScore}</WinScore> Wins
          </p>
          <p>
            <LoseScore>{compScore}</LoseScore> Loses
          </p>
        </Results>
      </Header>

      <Game
        icon={icon}
        setIcon={setIcon}
        compIcon={compIcon}
        setCompIcon={setCompIcon}
        result={result}
        setResult={setResult}
        setMyScore={setMyScore}
        setCompScore={setCompScore}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  padding: 40px;
  max-width: 500px;
`;

const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 30px;

  padding-bottom: 20px;
`;

const Results = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1.8rem;
  }
`;

const WinScore = styled.b`
  color: #05aa05;
`;

const LoseScore = styled.b`
  color: red;
`;
