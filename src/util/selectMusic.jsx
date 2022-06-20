let link = '';
let idMusic = '';
let titleMusic = '';
let artistMusic = '';
let imgMusic = '';
export async function selectMusic(music) {
  let linkId = 'https://www.youtube.com/embed/' + (await music.music_id);
  link = await linkId;
  idMusic = await music.music_id;
  titleMusic = await music.music_name;
  artistMusic = await music.music_artist;

  imgMusic = 'https://img.youtube.com/vi/' + idMusic + '/0.jpg';
}
export { link, idMusic, titleMusic, artistMusic, imgMusic };
