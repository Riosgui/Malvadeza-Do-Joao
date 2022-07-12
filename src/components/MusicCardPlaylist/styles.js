import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;

    > img {
      width: 10%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      padding: 0 4% 0 1%;
    }

    > div > a {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }

    > div > a > svg {
      width: 10%;
      height: 10%;
    }
  `}
`;
