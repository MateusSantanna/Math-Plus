import styled, { keyframes, css } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const flashAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const CenterTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${(props) => (props.isCritical ? "red" : "green")};
  position: relative;
  animation: ${(props) =>
    props.isCritical
      ? css`
          ${flashAnimation} 0.5s linear infinite
        `
      : "none"};
`;

export const Pointer = styled.div`
  width: 6px;
  height: 45px;
  background-color: #c0c0c0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform-origin: bottom;
  animation: ${rotateAnimation} 1s linear infinite;
  z-index: 1;
`;

export const CounterTime = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  z-index: 2;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${(props) =>
    props.isCritical
      ? css`
          ${flashAnimation} 0.5s linear infinite
        `
      : "none"};
`;
