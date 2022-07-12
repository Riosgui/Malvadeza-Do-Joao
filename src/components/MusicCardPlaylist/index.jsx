import P from 'prop-types';
import * as Styled from './styles';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MusicCardPlaylist = ({ nome, link }) => {
  return (
    <Styled.Container>
      <img src={'https://img.youtube.com/vi/' + link + '/0.jpg'} alt="Imagem da musica" />
      <div>
        <p>{nome}</p>
        <a>
          <FontAwesomeIcon icon={FontAwesome.faCirclePlay} />
        </a>
      </div>
    </Styled.Container>
  );
};

MusicCardPlaylist.propTypes = {
  nome: P.string.isRequired,
  link: P.string.isRequired,
};
