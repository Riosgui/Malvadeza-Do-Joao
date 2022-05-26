import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

export const MusicController = () => {
  return (
    <Styled.Container>
      <FontAwesomeIcon icon={FontAwesome.faCircleArrowLeft} />
      <FontAwesomeIcon icon={FontAwesome.faCirclePlay} />
      <FontAwesomeIcon icon={FontAwesome.faCircleArrowRight} />
    </Styled.Container>
  );
};
