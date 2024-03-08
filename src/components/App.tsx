import Game from "./Game/Game";
import { useState } from "react";
import { AppContainer, Header, LoseScore, Results, WinScore } from "./styles";
import FinalResultsModal from "./FinalResultsModal/FinalResultsModal";
import Footer from "./Footer/Footer";

function App() {
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [compIcon, setCompIcon] = useState<JSX.Element | null>(null);
  const [result, setResult] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [vibrationIsEnable, setVibrationIsEnable] = useState(true);

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

      {myScore < 10 && compScore < 10 ? (
        <Game
          icon={icon}
          setIcon={setIcon}
          compIcon={compIcon}
          setCompIcon={setCompIcon}
          result={result}
          setResult={setResult}
          setMyScore={setMyScore}
          setCompScore={setCompScore}
          vibrationIsEnable={vibrationIsEnable}
        />
      ) : (
        <FinalResultsModal
          myScore={myScore}
          setMyScore={setMyScore}
          setCompScore={setCompScore}
        />
      )}
      <Footer
        vibrationIsEnable={vibrationIsEnable}
        setVibrationIsEnable={setVibrationIsEnable}
      />
    </AppContainer>
  );
}

export default App;
