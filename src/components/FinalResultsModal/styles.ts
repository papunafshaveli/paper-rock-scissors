import styled from "styled-components";

export const ModalContainer = styled.div`
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

export const Modal = styled.div`
  background-color: #f1f184;
  border-radius: 5px;
  padding: 2rem;
  width: 30em;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
