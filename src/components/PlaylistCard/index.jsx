import P from 'prop-types';
import * as Styled from './styles';

export const PlaylistCard = ({ imgUrl, nome, criador }) => {
  return (
    <Styled.Container>
      <img src={imgUrl} alt="Imagem Playlist" />
      <div>
        <span>{nome}</span>
        <span>{criador}</span>
      </div>
    </Styled.Container>
  );
};

PlaylistCard.propTypes = {
  imgUrl: P.string.isRequired,
  nome: P.string.isRequired,
  criador: P.string.isRequired,
};
