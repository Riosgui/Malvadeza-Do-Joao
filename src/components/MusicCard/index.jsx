import P from 'prop-types';
import * as Styled from './styles';

export const MusicCard = ({ srcImg, title, descript }) => {
  return (
    <Styled.Container>
      <img src={srcImg} alt={descript} />
      <h6>{title}</h6>
      <p>{descript}</p>
    </Styled.Container>
  );
};

MusicCard.propTypes = {
  srcImg: P.string.isRequired,
  title: P.string.isRequired,
  descript: P.string.isRequired,
};
