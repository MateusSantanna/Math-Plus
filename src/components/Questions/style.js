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

   @media (min-width: 320px) and (max-width: 425px) {
    margin-bottom: 0.75rem;
  }
`;

export const TitleQuestions = styled.h1`
  @media (min-width: 320px) and (max-width: 425px) {
    height: 1rem;
  }

  @media (min-width: 767px) {
    width: 15rem;
    height: 3rem;
    font-size: 4rem;
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
export const OneToFiveClick = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  button {
    font-size: 2rem;
    background-color: black;
    color: white;
    text-align: center;
    margin-left: 0.5rem;
  }

  button:active {
    background-color: red;
  }
`;

export const SixToFinalClick = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  button {
    font-size: 2rem;
    background-color: black;
    color: white;
    text-align: center;
    margin-left: 0.5rem;
  }

  button:active {
    background-color: red;
  }
`;
