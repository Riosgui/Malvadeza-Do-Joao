import * as Styled from './styles';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { changeDetailsMusic, fila } from '../../util/selectMusic';
import ReactPlayer from 'react-player/youtube';

export const MusicController = () => {
  const [currentIcon, setCurrentIcon] = useState(FontAwesome.faCirclePlay);
  const [currentAction, setCurrentAction] = useState(false);
  const [musicFila, setMusicFila] = useState('');
  const [musicaAtual, setMusicaAtual] = useState(0);

  useEffect(() => {
    async function defineMusic() {
      if (fila.length != 0) {
        setMusicFila(await fila[musicaAtual].link);
      }
    }
    defineMusic();
  }, [musicaAtual]);

  function PlayMusic() {
    setCurrentIcon(FontAwesome.faCirclePlay);
    setCurrentAction(false);
    setMusicFila(fila[musicaAtual].link);
  }

  function PauseMusic() {
    setCurrentIcon(FontAwesome.faCirclePause);
    setCurrentAction(true);
    setMusicFila(fila[musicaAtual].link);
  }

  function NextMusic() {
    if (musicaAtual < fila.length) {
      setMusicaAtual(musicaAtual + 1);
    }
    changeDetailsMusic(musicaAtual + 1);
    setMusicFila(fila[musicaAtual].link);
    setCurrentIcon(FontAwesome.faCirclePause);
    PauseMusic();
    () => {
      PlayMusic();
    };
  }

  function PrevMusic() {
    if (musicaAtual > 0) {
      setMusicaAtual(musicaAtual - 1);
    }
    changeDetailsMusic(musicaAtual - 1);
    setMusicFila(fila[musicaAtual].link);
    setCurrentIcon(FontAwesome.faCirclePause);
    PauseMusic();
    () => {
      PlayMusic();
    };
  }

  console.log(musicaAtual);

  return (
    <Styled.Container>
      <ReactPlayer style={{ display: 'none' }} url={musicFila} playing={currentAction} />
      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={PrevMusic} icon={FontAwesome.faCircleArrowLeft} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={currentAction == true ? PlayMusic : PauseMusic} id="BtnPlay" icon={currentIcon} />
      </Styled.BtnPlayer>

      <Styled.BtnPlayer>
        <FontAwesomeIcon onClick={NextMusic} icon={FontAwesome.faCircleArrowRight} />
      </Styled.BtnPlayer>
    </Styled.Container>
  );
};
