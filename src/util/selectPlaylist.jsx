// import { APIPlaylist } from './API-music';

let fila = [];
let pag = 0;

// export async function selectPlaylist(playlist) {
//   const allPLaylists = await APIPlaylist();

//   // console.log(allPLaylists[playlist]);
//   // console.log('Playlist: ' + playlist);
// }

export function alteraPag(bool) {
  console.log('chamou: ' + bool);
  pag = bool;
}

export { fila, pag };
