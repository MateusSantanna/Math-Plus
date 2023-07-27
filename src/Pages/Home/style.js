import styled from "styled-components";

export const ButtonBegin = styled.button`
  color: white;
  border-radius: 1rem;
  background-color: black;
  padding: 16px 16px 16px 16px;

  :hover {
    border: 3px solid white;
  }
`;
export const SeparationDifficulty = styled.div`
  display: grid;
`;

export const ButtonEasy = styled.button`
  color: white;
  background-color: green;
  border-radius: 1rem;
  padding: 12px 12px 12px 12px;
  width: 5rem;
  height: 3rem;
  border: 0;
  font-size: large;

  :hover {
    border: 3px solid black;
  }
`;

export const ButtonNormal = styled.button`
  color: white;
  background-color: #ffe04b;
  border-radius: 1rem;
  padding: 12px 12px 12px 12px;
  width: 5rem;
  height: 3rem;
  border: 0;
  margin-top: 1rem;
  font-size: large;

  :hover {
    border: 3px solid black;
  }
`;

export const ButtonHard = styled.button`
  color: white;
  background-color: red;
  border-radius: 1rem;
  padding: 12px 12px 12px 12px;
  width: 5rem;
  height: 3rem;
  border: 0;
  margin-top: 1rem;
  font-size: large;

  :hover {
    border: 3px solid black;
  }
`;

export const ButtonBack = styled.button`
  color: white;
  border-radius: 1rem;
  background-color: black;
  padding: 12px 12px 12px 12px;
  width: 5rem;
  height: 3rem;
  margin-top: 3rem;
  border: 0;
  font-size: large;

  :hover {
    border: 3px solid white;
  }
`;

export const InfoDifficultyEasy = styled.h1`
  color: green;
  font-size: 1.5rem;
`;

export const InfoDifficultyNormal = styled.h1`
  color: #daa520;
  font-size: 1.5rem;
`;

export const InfoDifficultyHard = styled.h1`
  color: red;
  font-size: 1.5rem;
`;
