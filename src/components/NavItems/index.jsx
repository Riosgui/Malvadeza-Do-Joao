import P from 'prop-types';
import * as Styled from './styles';

export const NavItems = ({ children, click }) => {
  return (
    <Styled.Container onClick={click}>
      <h6 style={{ fontWeight: '500' }}>{children}</h6>
    </Styled.Container>
  );
};

NavItems.propTypes = {
  children: P.node.isRequired,
  click: P.func,
};
