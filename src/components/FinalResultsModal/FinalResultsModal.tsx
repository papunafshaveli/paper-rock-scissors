import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

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
      <Modal>
        <h1>{myScore === 10 ? "Congrats! You Win!" : "You Lost"} </h1>

        <button onClick={handleStartAgain}>Let's Start Again!</button>
      </Modal>
    </ModalContainer>
  );
};

export default FinalResultsModal;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background-color: #f1f184;
  border-radius: 5px;
  padding: 2rem;
  width: 30em;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1 {
    font-size: 1.8rem;
  }

  button {
    padding: 2px 4px;
    font-size: 1.6rem;
    background-color: darkgoldenrod;

    &:hover {
      background-color: chocolate;
      color: white;
    }
  }
`;
