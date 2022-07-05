import * as Styled from './styles';
import { NavItems } from '../NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

export const MenuNav = () => {
  return (
    <Styled.Container>
      <FontAwesomeIcon className={'Provisorio'} icon={FontAwesome.faRecordVinyl} />
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
  );
};
