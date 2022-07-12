import { useState } from 'react';
import { APIOneMusic, APIPlaylist } from '../../util/API-music';
import { alteraPag } from '../../util/selectPlaylist';
import { PlaylistCard } from '../PlaylistCard';
import * as Styled from './styles';

export const MenuPlaylist = () => {
  const [playlists, setPlaylists] = useState();
  const [filaPlay] = useState([]);
  let doc = [];

  async function getPlaylist() {
    const playlistAPI = await APIPlaylist();
    setPlaylists(playlistAPI);
  }
  async function getMusicsToPlaylist(id, pos) {
    const cuMusicsPlaylist = await APIOneMusic(id);
    filaPlay[pos] = cuMusicsPlaylist;
    // console.log(filaPlay);
  }

  if (playlists == null) {
    getPlaylist();
  } else {
    let musicsPlaylist = playlists[0].musics.split('$$');
    for (let i = 0; i < musicsPlaylist.length; i++) {
      getMusicsToPlaylist(musicsPlaylist[i], i);
    }
    for (let i = 0; i < playlists.length; i++) {
      doc[i] = (
        <PlaylistCard
          key={playlists[i].id}
          imgUrl={playlists[i].playlist_img}
          nome={playlists[i].playlist_name}
          criador={playlists[i].playlist_autor}
          click={() => {
            alteraPag(1);
          }}
        />
      );
    }
  }

  return <Styled.Container>{doc}</Styled.Container>;
};
