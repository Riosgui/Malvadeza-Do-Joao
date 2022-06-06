import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { APIMusic } from '../../util/API-music';

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
      <Styled.BtnPlayer>
        <FontAwesomeIcon icon={FontAwesome.faCircleArrowLeft} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={currentAction == 'Play' ? PlayMusic : PauseMusic} id="BtnPlay" icon={currentIcon} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon icon={FontAwesome.faCircleArrowRight} />
      </Styled.BtnPlayer>
      <APIMusic />
    </Styled.Container>
  );
};
