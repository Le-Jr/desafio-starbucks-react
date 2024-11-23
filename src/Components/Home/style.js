import { styled } from "styled-components";

export const TitleStyle = styled.section`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 800px;
  margin-left: 5em;
`;

export const H1 = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
  font-weight: 400;

  span {
    color: #037143;
    font-weight: 700;
  }
`;

export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 64px;
  margin-bottom: 20px;
  font-weight: 400;
`;

export const P = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 36px;
`;
