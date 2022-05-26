import * as Styled from './styles';

export const CurrentMusic = () => {
  return (
    <Styled.Container>
      <img src="https://i.scdn.co/image/ab67616d00001e024b9ca70affe8386d84bd260d" alt="Capa da Música" />
      <Styled.MusicDetails>
        <h6>Titulo Musica</h6>
        <p>Artista</p>
      </Styled.MusicDetails>
    </Styled.Container>
  );
};
