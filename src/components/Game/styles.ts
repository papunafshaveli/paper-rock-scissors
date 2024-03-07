import styled from "styled-components";
import { device } from "../../deviceSizes/deviceSizes";

export const GameContainer = styled.div`
  position: relative;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const ResultText = styled.h2<{ result: string }>`
  position: absolute;
  top: -10px;
  left: 45%;
  transform: translate(-50%, -50%);
  font-size: 3.2rem;

  color: ${(props) =>
    props.result === "win"
      ? "#7FE122"
      : props.result === "win"
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
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 85px;

  h3 {
    font-size: 2.4rem;
    color: #843939;
  }

  @media ${device.tablet} {
    h3 {
      font-size: 3.2rem;
    }
  }

  span {
    font-size: 1.8rem;
    padding: 20px 25px;
    background-color: goldenrod;
    border-radius: 50%;
  }
`;

export const RockWrapper = styled.div`
  width: 80px;

  cursor: pointer;

  padding: 20px;

  background-color: #326908;

  border-radius: 50%;

  &:hover {
    background-color: #073b07;
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

  &:hover {
    background-color: #b7ae04;
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

  &:hover {
    background-color: #a33c00;
  }

  @media ${device.tablet} {
    width: 100px;
    padding: 10px;
  }
`;

export const Challenge = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
