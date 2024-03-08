import styled from "styled-components";
import { device } from "../../deviceSizes/deviceSizes";

export const GameContainer = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const Challenge = styled.div<{ result: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  width: 100%;
  height: 90px;

  background-color: ${(props) =>
    props.result === "Win"
      ? "#7FE122"
      : props.result === "Lost"
      ? "#851E00"
      : "burlywood"};
  padding: 10px;

  border: 1px solid black;
  border-radius: 5px;

  p {
    text-align: center;

    font-size: 1.8rem;
    color: wheat;
  }

  @media ${device.tablet} {
    height: 110px;
  }
`;

export const MyIcon = styled.div`
  width: 80px;
  @media ${device.tablet} {
    width: 90px;
  }
`;

export const CompsIcon = styled.div`
  width: 80px;
  @media ${device.tablet} {
    width: 90px;
  }
`;

export const ResultText = styled.h2<{ result: string }>`
  font-size: 3.2rem;

  color: ${(props) =>
    props.result === "Win"
      ? "#115700"
      : props.result === "Lost"
      ? "red"
      : "yellow"};

  @media ${device.tablet} {
    font-size: 4.8rem;
  }
`;

export const YouAndComputer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const You = styled.div`
  h3 {
    font-size: 2.4rem;
    color: #5fea09;
  }

  @media ${device.tablet} {
    h3 {
      font-size: 3.2rem;
    }
  }
`;

export const Computer = styled.div`
  h3 {
    font-size: 2.4rem;
    color: #843939;
  }

  @media ${device.tablet} {
    h3 {
      font-size: 3.2rem;
    }
  }
`;

export const Choices = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const RockWrapper = styled.div`
  width: 80px;

  cursor: pointer;

  padding: 20px;

  background-color: #326908;

  border-radius: 50%;

  &:active {
    background-color: #073b07;
    transform: scale(1.2);
  }

  @media ${device.tablet} {
    width: 100px;
    padding: 10px;
  }
`;
export const PaperWrapper = styled.div`
  width: 80px;
  padding: 20px;

  background-color: #879708;

  border-radius: 50%;

  cursor: pointer;

  &:active {
    background-color: #b7ae04;
    transform: scale(1.2);
  }

  @media ${device.tablet} {
    width: 100px;
    padding: 10px;
  }
`;
export const ScissorsWrapper = styled.div`
  width: 80px;
  padding: 20px;

  background-color: #cd6504;

  border-radius: 50%;

  cursor: pointer;

  &:active {
    background-color: #a33c00;
    transform: scale(1.2);
  }

  @media ${device.tablet} {
    width: 100px;
    padding: 10px;
  }
`;
