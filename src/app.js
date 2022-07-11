import express from 'express';
import cors from 'cors';
import { createTableMusic } from './Controller/ControllMusics.js';
import { musicDelete, musicInsert, musicSelectAll, musicSelectOne, musicUpdate} from './Dep/musicFunctions.js';
import { createTablePlaylist } from './Controller/ControllPlaylists.js';
import { playlistDelete, playlistInsert, playlistSelectAll, playlistSelectOne, playlistUpdate} from './Dep/playlistFunctions.js';

createTableMusic()
createTablePlaylist()

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', function(req, res){
    res.send('A bolsinha está sendo rodada')
})

/* Music Content */
app.get('/musicAll', musicSelectAll)

app.post('/musicOne', musicSelectOne)

app.post('/musicInsert', musicInsert)

app.put('/musicUpdate', musicUpdate)

app.delete('/musicDelete', musicDelete)

/* Playlist Content */
app.get('/playlistAll', playlistSelectAll)

app.get('/playlistOne', playlistSelectOne)

app.post('/playlistInsert', playlistInsert)

app.put('/playlistUpdate', playlistUpdate)

app.delete('/playlistDelete', playlistDelete)

app.listen(process.env.PORT || 4000, () => console.log("O portal pro inferno foi aberto."))