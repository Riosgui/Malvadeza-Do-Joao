import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${() => css`
    list-style: none;
    color: white;

    > h6 > svg {
      width: 20%;
      margin-right: 0.25rem;
    }
  `}
`;
