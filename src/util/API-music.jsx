export const APIMusic = async () => {
  /* On */
  const response = await fetch('https://malvadeza-do-joao.herokuapp.com/musicAll');

  /* Off */
  // const response = await fetch('http://localhost:4000/musicAll');

  const musicJson = await response.json();
  return musicJson;
};

export const APIOneMusic = async (numberId) => {
  /* On */
  const response = await fetch('https://malvadeza-do-joao.herokuapp.com/musicOne', {
    method: 'POST',
    headers: {
      // eslint-disable-next-line prettier/prettier
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    // eslint-disable-next-line prettier/prettier
    body: JSON.stringify({ "id": numberId }),
  });

  /* Off */
  // const response = await fetch('http://localhost:4000/musicOne', {
  //   method: 'POST',
  //   headers: {
  //     // eslint-disable-next-line prettier/prettier
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   // eslint-disable-next-line prettier/prettier
  //   body: JSON.stringify({ "id": numberId }),
  // });

  const musicOneJson = await response.json();
  return musicOneJson;
};

export const APIPlaylist = async () => {
  /* On */
  const response = await fetch('https://malvadeza-do-joao.herokuapp.com/playlistAll');

  /* Off */
  //const response = await fetch('http://localhost:4000/playlistAll');

  const playlistJson = await response.json();
  return playlistJson;
};

export const APIOnePlaylist = async (numberId) => {
  /* On */
  const response = await fetch('https://malvadeza-do-joao.herokuapp.com/playlistOne', {
    method: 'POST',
    headers: {
      // eslint-disable-next-line prettier/prettier
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    // eslint-disable-next-line prettier/prettier
    body: JSON.stringify({ "id": numberId }),
  });

  /* Off */
  // const response = await fetch('http://localhost:4000/playlistOne', {
  //   method: 'POST',
  //   headers: {
  //     // eslint-disable-next-line prettier/prettier
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   // eslint-disable-next-line prettier/prettier
  //   body: JSON.stringify({ "id": numberId }),
  // });

  const playlistJson = await response.json();
  return playlistJson;
};
