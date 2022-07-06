import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    > img {
      max-width: 20%;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 2%;
    }
  `}
`;
