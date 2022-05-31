import $ from 'jquery';

export const DeezerAPI = () => {
  $.ajax({
    method: 'GET',
    dataType: 'Json',
    contentType: 'application/json',
    responseType: 'application/json',
    url: 'https://api.deezer.com/playlist/4341978/tracks?limit=2',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'application/json',
    },
  }).then((dados) => {
    console.log(dados);
  });
};
