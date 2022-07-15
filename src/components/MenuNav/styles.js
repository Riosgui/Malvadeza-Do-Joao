import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 30%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;

    .Provisorio {
      width: 60%;
      height: 50%;
      text-align: center;
      color: white;
      margin-top: 20px;
      cursor: pointer;
    }
  `}
`;

export const NavList = styled.ul`
  ${() => css`
    width: 100%;
    padding-left: 0.45rem;
    cursor: pointer;

    > h6 > svg {
      margin-right: 5rem;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    max-width: 100%;
  `}
`;
