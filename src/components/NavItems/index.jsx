import P from 'prop-types';
import * as Styled from './styles';

export const NavItems = ({ children }) => {
  return (
    <Styled.Container>
      <h6 style={{ fontWeight: '500' }}>{children}</h6>
    </Styled.Container>
  );
};

NavItems.propTypes = {
  children: P.node.isRequired,
};
