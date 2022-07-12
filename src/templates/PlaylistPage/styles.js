import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background: #131313;
    width: 85%;
    height: 90vh;
    color: white;
  `}
`;

export const Head = styled.div`
  ${() => css`
    display: flex;
    height: 40%;

    > img {
      max-height: 90%;
      margin-right: 5px;
    }
  `}
`;

export const infoPlaylist = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Card = styled.div`
  ${() => css`
    width: auto;
    height: 60%;
    overflow-y: auto;

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
