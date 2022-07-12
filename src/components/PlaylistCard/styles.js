import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 1.4rem;
    box-shadow: inset 0px 0px 9px 0px black;
    padding: 2px;
    cursor: pointer;

    > img {
      max-width: 30%;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 2%;
    }
  `}
`;
