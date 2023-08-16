import styled from "styled-components";

export const ScoreCorrect = styled.h1`
  color: white;
  background-color: green;
  width: 10rem;

  height: 4rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 3rem;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 10rem;
    height: 4rem;
    margin: auto;
  }
`;

export const ScoreWrong = styled.h1`
  color: white;
  background-color: red;
  height: 4rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  width: 10rem;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 4rem;
    margin: auto;
  }
`;
