import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { DeezerAPI } from '../../util/deezer_api';
import { useState } from 'react';

export const MusicController = () => {
  const [currentIcon, setCurrentIcon] = useState(FontAwesome.faCirclePlay);
  const [currentAction, setCurrentAction] = useState('Play');

  function PlayMusic() {
    setCurrentIcon(FontAwesome.faCirclePause);
    setCurrentAction('Pause');
    document.querySelector('audio').play();
  }

  function PauseMusic() {
    setCurrentIcon(FontAwesome.faCirclePlay);
    setCurrentAction('Play');
    document.querySelector('audio').pause();
  }

  return (
    <Styled.Container>
      <FontAwesomeIcon icon={FontAwesome.faCircleArrowLeft} />
      <FontAwesomeIcon onClick={currentAction == 'Play' ? PlayMusic : PauseMusic} id="BtnPlay" icon={currentIcon} />
      <FontAwesomeIcon icon={FontAwesome.faCircleArrowRight} />
      <DeezerAPI />
    </Styled.Container>
  );
};
