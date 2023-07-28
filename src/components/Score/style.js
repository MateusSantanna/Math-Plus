import styled from "styled-components";

export const StyledDivScore = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const ScoreText = styled.p`
  color: black;
  font-size: 1.5rem;
`;

export const ScoreActual = styled.p`
  color: black;
  font-size: 1.5rem;
`;
