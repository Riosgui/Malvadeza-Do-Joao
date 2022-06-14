import * as Styled from './styles';
import { APIMusic } from '../../util/API-music';
import { useState } from 'react';

export const CurrentMusic = () => {
  const [musics, setMusics] = useState();

  let img = '';
  let title = '';
  let artist = '';

  async function getMusics() {
    const musicsAPI = await APIMusic();
    setMusics(musicsAPI);
  }

  if (musics == null) {
    getMusics();
  } else {
    img = 'https://img.youtube.com/vi/' + musics[0].music_id + '/0.jpg';
    title = musics[0].music_name;
    artist = musics[0].music_artist;
  }

  return (
    <Styled.Container>
      <img src={img} alt="Capa da Música" />
      <Styled.MusicDetails>
        <h6>{title}</h6>
        <p>{artist}</p>
      </Styled.MusicDetails>
    </Styled.Container>
  );
};
