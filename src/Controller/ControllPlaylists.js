import { openDb } from '../SQLite/configDB.js'

export async function createTablePlaylist(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Playlists ( id INTEGER PRIMARY KEY, playlist_id TEXT, playlist_name TEXT, playlist_autor TEXT, playlist_img TEXT, musics TEXT )')
    })
}

export async function insertPlaylist(playlist){
    openDb().then(db => {
        db.run('INSERT INTO Playlists (playlist_id, playlist_name, playlist_autor, playlist_img, musics) VALUES (?, ?, ?, ?, ?)', [playlist.playlist_id, playlist.playlist_name, playlist.playlist_autor, playlist.playlist_img, playlist.musics]);
    })
}

export async function updatePlaylist(playlist){
    openDb().then(db => {
        db.run('UPDATE Playlists SET playlist_id = ?, playlist_name = ?, playlist_autor = ?, playlist_img = ?, musics = ? WHERE id = ?', [playlist.playlist_id, playlist.playlist_name, playlist.playlist_autor, playlist.playlist_img, playlist.musics, playlist.id]);
    })
}

export async function selectPlaylist(){
    return openDb().then(db => {
       return db.all('SELECT * FROM Playlists').then(res => res)
    })
}

export async function selectOnePlaylist(id){
    return openDb().then(db => {
       return db.get('SELECT * FROM Playlists WHERE id=?', [id]).then(res => res)
    })
}

export async function deletePlaylist(id){
    return openDb().then(db => {
       return db.get('DELETE FROM Playlist WHERE id=?', [id])
    })
}
