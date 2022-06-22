import { APIMusic } from './API-music';

let link = '';
let idMusic = '';
let titleMusic = '';
let artistMusic = '';
let imgMusic = '';
let fila = [];
export async function selectMusic(music) {
  let linkId = 'https://www.youtube.com/embed/' + (await music.music_id);
  link = await linkId;
  idMusic = await music.music_id;
  titleMusic = await music.music_name;
  artistMusic = await music.music_artist;

  imgMusic = 'https://img.youtube.com/vi/' + idMusic + '/0.jpg';
  const allMusics = await APIMusic();
  for (let i = 0; i < allMusics.length; i++) {
    if (allMusics[i].music_id == idMusic) {
      fila[0] = allMusics[i];
      fila[0].link = 'https://www.youtube.com/embed/' + (await allMusics[i].music_id);
      console.log(fila);
    } else {
      fila[i + 1] = allMusics[i];
      fila[i + 1].link = 'https://www.youtube.com/embed/' + (await allMusics[i].music_id);
    }
  }
}
export { link, idMusic, titleMusic, artistMusic, imgMusic, fila };
