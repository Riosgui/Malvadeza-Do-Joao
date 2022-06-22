import * as Styled from './styles';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { fila } from '../../util/selectMusic';
import ReactPlayer from 'react-player/youtube';

export const MusicController = () => {
  const [currentIcon, setCurrentIcon] = useState(FontAwesome.faCirclePlay);
  const [currentAction, setCurrentAction] = useState('Pause');
  const [musicFila, setMusicFila] = useState('');
  const [musicaAtual, setMusicaAtual] = useState(0);

  // setInterval(() => {
  //   // setMusicFila(fila[musicaAtual].link);
  //   console.log(musicaAtual);
  // }, 1000);

  function PlayMusic() {
    setCurrentIcon(FontAwesome.faCirclePlay);
    setCurrentAction('Pause');
    setMusicFila(fila[musicaAtual].link);
  }

  function PauseMusic() {
    setCurrentIcon(FontAwesome.faCirclePause);
    setCurrentAction('Play');
    setMusicFila(fila[musicaAtual].link);
  }

  function NextMusic() {
    if (musicaAtual < fila.length) {
      setMusicaAtual(musicaAtual + 1);
      console.log(musicaAtual);
      setMusicFila(fila[musicaAtual].link);
      setCurrentIcon(FontAwesome.faCirclePause);
    }
  }

  function PrevMusic() {
    if (musicaAtual > 0) {
      setMusicaAtual(musicaAtual - 1);
      console.log(musicaAtual);
      setMusicFila(fila[musicaAtual].link);
    }
  }

  return (
    <Styled.Container>
      <ReactPlayer style={{ display: 'none' }} url={musicFila} playing={currentAction == 'Play' ? true : false} />
      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={PrevMusic} icon={FontAwesome.faCircleArrowLeft} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={currentAction == 'Play' ? PlayMusic : PauseMusic} id="BtnPlay" icon={currentIcon} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={NextMusic} icon={FontAwesome.faCircleArrowRight} />
      </Styled.BtnPlayer>
    </Styled.Container>
  );
};
