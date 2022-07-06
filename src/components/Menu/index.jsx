//import P from 'prop-types';
import { MenuNav } from '../MenuNav';
import { MenuPlaylist } from '../MenuPlaylist';
import * as Styled from './styles';

export const Menu = () => {
  return (
    <Styled.Container>
      <MenuNav />
      <MenuPlaylist />
    </Styled.Container>
  );
};
