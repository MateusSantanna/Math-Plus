import styled from "styled-components";

export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const heartSize = "50px";

export const Heart = styled.div`
  width: ${heartSize};
  height: ${heartSize};
  background-color: ${(props) => (props.error ? "black" : "red")};

  margin-right: 2.5rem;
  position: relative;
  transform: rotate(-45deg);

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
