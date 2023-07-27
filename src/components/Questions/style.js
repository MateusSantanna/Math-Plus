import styled from "styled-components";

export const StyledQuestions = styled.div`
  display: grid;
  justify-content: center;
`;

export const TitleQuestions = styled.h1`
  width: 9rem;
  height: 3rem;
  text-align: center;
`;

export const QuestionScreen = styled.h1`
  width: 9rem;
  height: 3rem;
  text-align: center;
  border: 1px solid black;
`;

export const InputAnswers = styled.div`
  display: flex:
  justify-content: space-around;

  input {
    width: 9rem;
    height: 3rem;
    background-color: white;
    text-align: center;
    font-size: 2rem;
    color: black;
    border: 1px solid black;
  }

  button {
    width: 3rem;
    height: 3rem;
    font-size: xx-large;
  }
`;
