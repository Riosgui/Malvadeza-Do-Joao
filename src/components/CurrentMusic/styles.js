import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-width: 280px;
    width: 25vw;
    height: 100%;
    padding: 5px;
    display: flex;

    > img {
      width: auto;
      max-height: 100%;
    }
  `}
`;

export const MusicDetails = styled.div`
  ${() => css`
    margin-left: 1.4rem;
  `}
`;
