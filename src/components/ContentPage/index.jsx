import { MusicCard } from '../MusicCard';
import { APIMusic } from '../../util/API-music';
import { useState } from 'react';
import { selectMusic } from '../../util/selectMusic';
import * as Styled from './styles';

export const ContentPage = () => {
  const [musics, setMusics] = useState();
  let doc = [];

  async function getMusics() {
    const musicsAPI = await APIMusic();
    setMusics(musicsAPI);
  }

  if (musics == null) {
    getMusics();
  } else {
    for (let i = 0; i < musics.length; i++) {
      doc[i] = (
        <MusicCard
          click={() => {
            selectMusic(musics[i]);
            document.querySelector('#CurrentMusic').setAttribute('style', 'display: flex');
          }}
          srcImg={'https://img.youtube.com/vi/' + musics[i].music_id + '/0.jpg'}
          title={musics[i].music_name}
          descript={musics[i].music_artist}
        />
      );
    }
  }

  return <Styled.Container>{doc}</Styled.Container>;
};
