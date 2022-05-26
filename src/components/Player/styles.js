import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100vw;
    height: 10vh;
    background: #181818;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `}
`;
