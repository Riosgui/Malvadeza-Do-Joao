import { PlaylistCard } from '../PlaylistCard';
import * as Styled from './styles';

export const MenuPlaylist = () => {
  return (
    <Styled.Container>
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 1" criador="Criador 1" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 2" criador="Criador 2" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 3" criador="Criador 3" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 4" criador="Criador 4" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 5" criador="Criador 5" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 6" criador="Criador 6" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 7" criador="Criador 7" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 8" criador="Criador 8" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 9" criador="Criador 9" />
      <PlaylistCard imgUrl="https://i.imgur.com/aEKiDlB.jpeg" nome="Nome Playlist 10" criador="Criador 10" />
    </Styled.Container>
  );
};
