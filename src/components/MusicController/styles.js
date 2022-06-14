import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const BtnPlayer = styled.button`
  ${() => css`
    background: none;
    border: none;
    width: 5%;
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
