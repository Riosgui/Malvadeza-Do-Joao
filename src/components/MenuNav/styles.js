import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 40%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    .Provisorio {
      width: 50%;
      height: 50%;
      text-align: center;
      color: white;
    }
  `}
`;

export const NavList = styled.ul`
  ${() => css`
    width: 100%;
    padding-left: 0.45rem;
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
