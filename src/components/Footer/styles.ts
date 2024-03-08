import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Vibration = styled.div`
  width: 100%;

  background-color: burlywood;

  border-radius: 5px;

  padding: 6px 0;

  display: flex;
  justify-content: center;

  cursor: pointer;

  margin-bottom: 30px;

  &:hover {
    background-color: chocolate;
  }
`;
