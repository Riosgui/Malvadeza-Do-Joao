import * as Styled from './styles';
import { useState } from 'react';
import { artistMusic, imgMusic, titleMusic } from '../../util/selectMusic';

export const CurrentMusic = () => {
  const [title, setTitle] = useState();
  setInterval(() => {
    if (titleMusic != title) {
      setTitle(titleMusic);
    }
  }, 100);
  return (
    <Styled.Container>
      <img
        src={
          imgMusic == '' ? 'https://pbs.twimg.com/profile_images/1478713709824561159/jmSw5Wr4_400x400.jpg' : imgMusic
        }
        alt="Capa da Música"
      />
      <Styled.MusicDetails>
        <h6>{title}</h6>
        <p>{artistMusic}</p>
      </Styled.MusicDetails>
    </Styled.Container>
  );
};
