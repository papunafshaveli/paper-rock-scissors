import { Dispatch, SetStateAction } from "react";
import { resultText } from "../Enum/resultText";

export const useCalculateResult = ({
  myChoice,
  compChoice,
  setMyScore,
  setCompScore,
}: {
  myChoice: number;
  compChoice: number;
  setMyScore: Dispatch<SetStateAction<number>>;
  setCompScore: Dispatch<SetStateAction<number>>;
}) => {
  if (myChoice === compChoice) {
    return resultText.draw;
  } else if (myChoice === 0 && compChoice !== 1) {
    setMyScore((prev: number) => prev + 1);
    return resultText.win;
  } else if (myChoice === 1 && compChoice !== 2) {
    setMyScore((prev: number) => prev + 1);
    return resultText.win;
  } else if (myChoice === 2 && compChoice !== 0) {
    setMyScore((prev: number) => prev + 1);
    return resultText.win;
  } else {
    setCompScore((prev: number) => prev + 1);
    return resultText.lost;
  }
};
