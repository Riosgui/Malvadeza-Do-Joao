import * as Styled from './styles';
import { artistMusic, imgMusic, titleMusic } from '../../util/selectMusic';
import { useState } from 'react';

export const CurrentMusic = () => {
  const [title, setTitle] = useState();

  console.log('currentTitle: ' + title);

  if (title != titleMusic) {
    setTitle(titleMusic);
  }
  return (
    <Styled.Container id="CurrentMusic">
      <img src={imgMusic} alt="Capa da Música" />
      <Styled.MusicDetails>
        <h6>{titleMusic}</h6>
        <p>{artistMusic}</p>
      </Styled.MusicDetails>
    </Styled.Container>
  );
};
