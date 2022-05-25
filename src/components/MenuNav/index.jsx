//import P from 'prop-types';
import * as Styled from './styles';
import { NavItems } from '../NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

export const MenuNav = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Image src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png" alt="Logo" />
        <Styled.NavList>
          <NavItems>
            <FontAwesomeIcon icon={FontAwesome.faHouse} />
            Home
          </NavItems>
          <NavItems>
            <FontAwesomeIcon icon={FontAwesome.faMagnifyingGlass} />
            Pesquisar
          </NavItems>
          <NavItems>
            <FontAwesomeIcon icon={FontAwesome.faCompactDisc} />
            Biblioteca
          </NavItems>
        </Styled.NavList>
      </Styled.Container>
    </>
  );
};
