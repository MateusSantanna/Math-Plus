import styled from "styled-components";

export const StyledQuestions = styled.div`
  width: 100%;
  @media (min-width: 320px) {
    display: grid;
    justify-content: center;
  }
`;

export const InputAnswers = styled.div`
  display: flex:
  justify-content: space-around;

  input {
    width: 9rem;
    height: 3rem;
    background-color: white;
    text-align: center;
    font-size: 1.5rem;
    color: black;
    border: 1px solid black;
  }

  button {
    width: 3rem;
    height: 3rem;
    font-size: xx-large;
    margin-left: 1rem;

  }
`;

export const TitleQuestions = styled.h1`
  @media (max-width: 425px) {
    height: 3rem;
    font-size: 4rem;
  }

  @media (min-width: 767px) {
    width: 15rem;
    height: 3rem;
  }
`;

export const QuestionScreen = styled.h1`
  border: 1px solid black;

  @media (min-width: 767px) {
    height: 4rem;
    text-align: center;
    font-size: 3rem;
  }
`;
