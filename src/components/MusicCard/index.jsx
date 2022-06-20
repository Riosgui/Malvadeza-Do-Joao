import P from 'prop-types';
import * as Styled from './styles';

export const MusicCard = ({ srcImg, title, descript, click }) => {
  return (
    <Styled.Container onClick={click}>
      <img src={srcImg} alt={descript} />
      <h6>{title}</h6>
      <p>{descript}</p>
    </Styled.Container>
  );
};

MusicCard.propTypes = {
  click: P.func,
  srcImg: P.string.isRequired,
  title: P.string.isRequired,
  descript: P.string.isRequired,
};
