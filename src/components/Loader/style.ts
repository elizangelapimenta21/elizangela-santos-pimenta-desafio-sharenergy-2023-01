import styled, { keyframes } from 'styled-components';

const updating = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 8px solid #000000;
      border-left: 8px solid #20AEF9;
      animation-name: ${updating};
      animation-duration: 1s;
      animation-iteration-count: infinite;
  }
`;