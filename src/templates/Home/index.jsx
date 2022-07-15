import { useState } from 'react';
import { ContentPage } from '../../components/ContentPage';
import { Menu } from '../../components/Menu';
import { Player } from '../../components/Player';
import { pag } from '../../util/selectPlaylist';
import { PlaylistPage } from '../PlaylistPage';
import * as Styled from './styles';

function Home() {
  const [pagRender, setPagRender] = useState(0);

  setInterval(() => {
    setPagRender(pag);
  }, 600);

  let render = '';

  if (pagRender == 0) {
    render = <ContentPage />;
  } else {
    render = <PlaylistPage />;
  }

  return (
    <Styled.Container>
      <Menu />
      {render}
      <Player />
    </Styled.Container>
  );
}
export default Home;
