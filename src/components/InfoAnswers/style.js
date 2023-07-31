import styled, { keyframes, css } from "styled-components";

export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 320px) and (max-width: 425px) {
    margin-top: 2rem;
    margin-left: 2rem;
  }
`;

const heartSize = "50px";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Heart = styled.div`
  width: ${heartSize};
  height: ${heartSize};
  background-color: ${(props) => (props.error ? "black" : "red")};

  margin-right: 2.5rem;
  position: relative;
  transform: rotate(-45deg);
  animation: ${(props) =>
    props.animated && props.error
      ? css`
          ${pulse} 0.2s 5
        `
      : "none"};

  &::before,
  &::after {
    content: "";
    width: ${heartSize};
    height: ${heartSize};
    background-color: ${(props) => (props.error ? "black" : "red")};
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    top: -25px;
    left: 0;
  }

  &::after {
    top: 0;
    left: 25px;
  }

  h1 {
    font-size: 2rem;
    color: white;
  }
`;
