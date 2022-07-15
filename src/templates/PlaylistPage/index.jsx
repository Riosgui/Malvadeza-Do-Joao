import * as Styled from './styles';
import { useState } from 'react';
import { APIOneMusic, APIPlaylist } from '../../util/API-music';
import { MusicCardPlaylist } from '../../components/MusicCardPlaylist';
import { selectMusic } from '../../util/selectMusic';

export const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState();
  const [filaPlay] = useState([]);
  const [check, setCheck] = useState(false);
  const [musics] = useState([]);

  async function getPlaylist() {
    const playlistAPI = await APIPlaylist();
    setPlaylists(playlistAPI);
  }

  async function getMusicsToPlaylist(id, pos) {
    const cuMusicsPlaylist = await APIOneMusic(id);
    filaPlay[pos] = await cuMusicsPlaylist;
    setCheck(true);
  }

  async function defineMusics() {
    for (let i = 0; i < filaPlay.length; i++) {
      musics[i] = (
        <MusicCardPlaylist
          key={i}
          click={() => {
            selectMusic(filaPlay[i]);
          }}
          nome={await filaPlay[i].music_name}
          link={await filaPlay[i].music_id}
        />
      );
    }
  }

  async function getMusics() {
    let musicsPlaylist = await playlists[0].musics.split('$$');
    for (let i = 0; i < musicsPlaylist.length; i++) {
      getMusicsToPlaylist(musicsPlaylist[i], i);
    }
  }

  if (playlists == null) {
    getPlaylist();
  } else {
    getMusics();
  }
  if (check != false) {
    setTimeout(() => {
      defineMusics();
    }, 100);
  }

  // selectPlaylist(0);

  return (
    <Styled.Container>
      <Styled.Head>
        <img src={playlists != null ? playlists[0].playlist_img : ''} alt="Imagem da playlist" />
        <Styled.infoPlaylist>
          <h5>{playlists != null ? playlists[0].playlist_name : ''}</h5>
          <p>Criado por: {playlists != null ? playlists[0].playlist_autor : ''}</p>
        </Styled.infoPlaylist>
      </Styled.Head>
      <Styled.Card>{musics}</Styled.Card>
    </Styled.Container>
  );
};
