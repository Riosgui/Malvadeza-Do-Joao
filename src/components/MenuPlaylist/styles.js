import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
    height: 50%;
    background: #1a1a1a;
    color: white;
    padding: 5px 0 5px 5px;
    margin-top: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #363636;
    }
    ::-webkit-scrollbar-thumb {
      background: #656565;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `}
`;
