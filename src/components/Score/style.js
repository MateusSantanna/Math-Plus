import styled from "styled-components";

export const StyledDivScore = styled.div`
  @media (min-width: 320px) and (max-width: 425px) {
    display: flex;
    justify-content: space-evenly;
    height: 1rem;
    width: 7rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    display: block;
    width: 20%;
  }
`;

export const ScoreText = styled.p`
  color: black;
  font-size: 1.5rem;
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const ScoreActual = styled.p`
  color: black;
  font-size: 1.5rem;
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;
