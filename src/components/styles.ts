import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

export const AppContainer = styled.div`
  padding: 20px 30px;
  max-width: 500px;

  @media ${device.tablet} {
    padding: 50px;
    max-width: 700px;
  }
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 30px;

  padding-bottom: 20px;

  h1 {
    font-size: 1.8rem;
    color: white;
  }

  @media ${device.tablet} {
    gap: 40px;

    h1 {
      font-size: 2.4rem;
    }
  }
`;

export const Results = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 2.4rem;
    color: white;
  }

  @media ${device.tablet} {
    p {
      font-size: 3.2rem;
    }
  }
`;

export const WinScore = styled.b`
  color: #05aa05;
`;

export const LoseScore = styled.b`
  color: red;
`;
