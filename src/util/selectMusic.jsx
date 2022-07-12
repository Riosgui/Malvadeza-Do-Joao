import { APIMusic } from './API-music';

let link = '';
let idMusic = '';
let titleMusic = '';
let artistMusic = '';
let imgMusic = '';
let fila = [];
let change = 0;

export async function selectMusic(music) {
  let linkId = 'https://www.youtube.com/embed/' + (await music.music_id);
  link = linkId;
  idMusic = await music.music_id;
  titleMusic = await music.music_name;
  artistMusic = await music.music_artist;

  imgMusic = 'https://img.youtube.com/vi/' + idMusic + '/0.jpg';
  const allMusics = await APIMusic();

  if (fila.length != 0 && fila[0].music_id != music.music_id) {
    for (let i = 0; i < allMusics.length; i++) {
      if (allMusics[i].music_id == idMusic) {
        fila[0] = allMusics[i];
        fila[0].link = 'https://www.youtube.com/embed/' + (await allMusics[i].music_id);
      } else {
        fila[i + 1] = allMusics[i];
        fila[i + 1].link = 'https://www.youtube.com/embed/' + (await allMusics[i].music_id);
      }
    }
    alteraState(1);
  } else {
    for (let i = 0; i < allMusics.length; i++) {
      if (allMusics[i].music_id == idMusic) {
        fila[0] = allMusics[i];
        fila[0].link = 'https://www.youtube.com/embed/' + (await allMusics[i].music_id);
      } else {
        fila[i + 1] = allMusics[i];
        fila[i + 1].link = 'https://www.youtube.com/embed/' + (await allMusics[i].music_id);
      }
    }
  }
}

export function alteraState(bool) {
  change = bool;
}

export async function changeDetailsMusic(number) {
  idMusic = await fila[number].music_id;
  titleMusic = await fila[number].music_name;
  artistMusic = await fila[number].music_artist;
  imgMusic = 'https://img.youtube.com/vi/' + idMusic + '/0.jpg';
}
export { link, idMusic, titleMusic, artistMusic, imgMusic, fila, change };
