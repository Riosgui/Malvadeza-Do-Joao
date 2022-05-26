import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background: #131313;
    width: 85%;
    height: 90vh;
    overflow-y: auto;
    color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `}
`;
