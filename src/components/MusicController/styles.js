import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .msgError {
      position: absolute;
      top: 20px;
      left: 48%;
      animation: surgeTop 1s;
      font-size: 2rem;
      background: #181818;
      padding: 10px 60px;
      border: 1px solid red;
      border-radius: 20px;
    }

    @keyframes surgeTop {
      0% {
        top: -100px;
      }
      100% {
        top: 20px;
      }
    }
  `}
`;

export const BtnPlayer = styled.button`
  ${() => css`
    background: none;
    border: none;
    width: 50px;
    display: flex;
    justify-content: center;
  `}
  & :active {
    transform: scale(0.98);
  }
  > svg {
    color: white;
    width: 88%;
    height: 88%;
    margin: 0 10px;
  }
`;
