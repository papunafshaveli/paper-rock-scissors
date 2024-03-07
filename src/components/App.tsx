import Game from "./Game/Game";
import { useState } from "react";
import { AppContainer, Header, LoseScore, Results, WinScore } from "./styles";

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
