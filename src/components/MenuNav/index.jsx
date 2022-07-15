import * as Styled from './styles';
import { NavItems } from '../NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { alteraPag } from '../../util/selectPlaylist';

export const MenuNav = () => {
  return (
    <Styled.Container>
      <FontAwesomeIcon
        onClick={() => {
          alteraPag(0);
        }}
        className={'Provisorio'}
        icon={FontAwesome.faRecordVinyl}
      />
      <Styled.NavList>
        <NavItems
          click={() => {
            alteraPag(0);
          }}
        >
          <FontAwesomeIcon icon={FontAwesome.faHouse} />
          Home
        </NavItems>
        <NavItems>
          <FontAwesomeIcon icon={FontAwesome.faMagnifyingGlass} />
          Pesquisar
        </NavItems>
        {/* <NavItems>
          <FontAwesomeIcon icon={FontAwesome.faCompactDisc} />
          Biblioteca
        </NavItems> */}
      </Styled.NavList>
    </Styled.Container>
  );
};
