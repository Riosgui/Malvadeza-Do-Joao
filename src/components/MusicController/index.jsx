import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { APIMusic } from '../../util/API-music';
import ReactPlayer from 'react-player/youtube';

export const MusicController = () => {
  const [currentIcon, setCurrentIcon] = useState(FontAwesome.faCirclePlay);
  const [currentAction, setCurrentAction] = useState('Pause');
  const [musics, setMusics] = useState();

  function PlayMusic() {
    setCurrentIcon(FontAwesome.faCirclePlay);
    setCurrentAction('Pause');
  }

  function PauseMusic() {
    setCurrentIcon(FontAwesome.faCirclePause);
    setCurrentAction('Play');
  }

  async function getMusics() {
    const musicsAPI = await APIMusic();
    setMusics(musicsAPI);
  }

  let link = '';

  if (musics == null) {
    getMusics();
  } else {
    link = 'https://www.youtube.com/embed/' + musics[0].music_id;
  }

  console.log(musics);

  return (
    <Styled.Container>
      <ReactPlayer style={{ display: 'none' }} url={link} playing={currentAction == 'Play' ? true : false} volume="1" />
      <Styled.BtnPlayer>
        <FontAwesomeIcon icon={FontAwesome.faCircleArrowLeft} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={currentAction == 'Play' ? PlayMusic : PauseMusic} id="BtnPlay" icon={currentIcon} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon icon={FontAwesome.faCircleArrowRight} />
      </Styled.BtnPlayer>
    </Styled.Container>
  );
};
