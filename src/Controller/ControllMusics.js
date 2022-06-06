import { openDb } from '../SQLite/configDB.js'

export async function createTableMusic(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Musics ( id INTEGER PRIMARY KEY, music_id TEXT, music_name TEXT, music_artist TEXT )')
    })
}

export async function insertMusic(music){
    openDb().then(db => {
        db.run('INSERT INTO Musics (music_id, music_name, music_artist) VALUES (?, ?, ?)', [music.music_id, music.name, music.artist]);
    })
}

export async function updateMusic(music){
    openDb().then(db => {
        db.run('UPDATE Musics SET music_id = ?, music_name = ?, music_artist = ? WHERE id = ?', [music.music_id, music.name, music.artist, music.id]);
    })
}

export async function selectMusic(){
    return openDb().then(db => {
       return db.all('SELECT * FROM Musics').then(res => res)
    })
}

export async function selectOneMusic(id){
    return openDb().then(db => {
       return db.get('SELECT * FROM Musics WHERE id=?', [id]).then(res => res)
    })
}

export async function deleteMusic(id){
    return openDb().then(db => {
       return db.get('DELETE FROM Musics WHERE id=?', [id])
    })
}
