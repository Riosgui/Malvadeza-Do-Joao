import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: 4%;
      height: 4%;
      margin: 0 10px;
    }
  `}
`;
