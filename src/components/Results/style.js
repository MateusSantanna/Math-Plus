import styled from "styled-components";

export const ScoreCorrect = styled.h1`
  color: white;
  background-color: green;

  height: 4rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 3rem;

  @media (min-width: 767px) {
    width: 10rem;
    line-height: 2rem;
  }
`;

export const ScoreWrong = styled.h1`
  color: white;
  background-color: red;
  height: 4rem;
  font-size: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 767px) {
    width: 10rem;
  }
`;
