import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
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
  animation: ${fadeInAnimation} 0.3s ease-in-out;

  &.fade-out {
    animation: ${fadeOutAnimation} 0.3s ease-in-out;
  }
`;
