import styled, { keyframes } from "styled-components";

const spinInAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const DivGameOver = styled.div`
  background-color: gray;
  color: white;
  width: 80vw;
  height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 9999;
  animation: ${spinInAnimation} 2s linear;

  pointer-events: none;

  &.game-over {
    pointer-events: auto;
  }
`;
