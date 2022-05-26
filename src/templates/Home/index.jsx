import { ContentPage } from '../../components/ContentPage';
import { Menu } from '../../components/Menu';
import { Player } from '../../components/Player';
import * as Styled from './styles';

function Home() {
  return (
    <Styled.Container>
      <Menu />
      <ContentPage />
      <Player />
    </Styled.Container>
  );
}
export default Home;
