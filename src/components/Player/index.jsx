import * as Styled from './styles';
import { CurrentMusic } from '../CurrentMusic';
import { MusicController } from '../MusicController';

export const Player = () => {
  return (
    <Styled.Container>
      <CurrentMusic />
      <MusicController />
    </Styled.Container>
  );
};
