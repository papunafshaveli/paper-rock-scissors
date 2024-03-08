import { Dispatch, SetStateAction } from "react";
import { Modal, ModalContainer } from "./styles";
import { createPortal } from "react-dom";

type FinalResultsModalProps = {
  myScore: number;
  setMyScore: Dispatch<SetStateAction<number>>;
  setCompScore: Dispatch<SetStateAction<number>>;
};

const FinalResultsModal: React.FC<FinalResultsModalProps> = ({
  myScore,
  setMyScore,
  setCompScore,
}) => {
  const handleStartAgain = () => {
    setMyScore(0);
    setCompScore(0);
  };
  return (
    <ModalContainer>
      {createPortal(
        <Modal>
          <h1>{myScore === 10 ? "Congrats! You Win!" : "You Lost"} </h1>

          <button onClick={handleStartAgain}>Let's Start Again!</button>
        </Modal>,
        document.body
      )}
    </ModalContainer>
  );
};

export default FinalResultsModal;
