import * as Styled from './styles';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { APIMusic } from '../../util/API-music';
import { link } from '../../util/selectMusic';
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

  if (musics == null) {
    getMusics();
  }

  return (
    <Styled.Container>
      <ReactPlayer style={{ display: 'none' }} url={link} playing={currentAction == 'Play' ? true : false} />
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
