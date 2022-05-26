import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 15%;
    margin: 5px;
    padding: 10px;

    > img {
      max-width: 100%;
    }
  `}
`;
