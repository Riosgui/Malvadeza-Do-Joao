import $ from 'jquery';
import React, { useEffect, useState } from 'react';

export const Teste = () => {
  let access = getHashParams();
  let token = access.access_token;

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  const TopTracksLorde = () => {
    $.ajax({
      method: 'GET',
      dataType: 'Json',
      url: 'https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((dados) => {
      document.querySelector('body').append(dados);
    });
  };

  function ChangeMusic(musicID) {
    const [MusicAtual, SetMusicAtual] = useState('3VD5XUJUAN8UxlbotOs917');
    useEffect(() => {
      SetMusicAtual('https://open.spotify.com/embed/track/' + musicID);
    }, [MusicAtual]);
    console.log(MusicAtual);
    return MusicAtual;
  }

  return (
    <>
      <div id="testesid">
        <a style={{ textDecoration: 'none', fontSize: '68px' }} href="http://localhost:8888">
          Logar no spotify
        </a>
        <button onClick={TopTracksLorde}>Buscar top tracks da Lorde</button>
        <button onClick={ChangeMusic('2D9BrlpeyjXF0vli2dYQ5V')}>Change Music</button>
        <iframe src={ChangeMusic()} allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    </>
  );
};
