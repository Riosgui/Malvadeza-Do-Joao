import $ from 'jquery';

export const DeezerAPI = () => {
  $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: 'https://api.deezer.com/playlist/4341978/tracks?limit=2',
  }).then((dados) => {
    console.log(dados);
  });
};
