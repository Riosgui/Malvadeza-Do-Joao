import { selectPlaylist, selectOnePlaylist, insertPlaylist, updatePlaylist, deletePlaylist } from '../Controller/ControllPlaylists.js'

export function playlistInsert (req, res) {
    insertPlaylist(req.body)
    res.json({
        "statusCode": 200,
        "Info": "Playlist criada com sucesso"
    })
}

export function playlistUpdate (req, res){
    updatePlaylist(req.body)
    res.json({
        "statusCode": 200,
        "Info": "Playlist atualizada com sucesso"
    })
}

export async function playlistSelectAll(req, res){
    let res_playlist = await selectPlaylist();
    res.json(res_playlist);
}

export async function playlistSelectOne(req, res){
    let res_playlist = await selectOnePlaylist(req.body.id);
    res.json(res_playlist);
}

export async function playlistDelete(req, res){
    let res_playlist = await deletePlaylist(req.body.id);
    res.json(res_playlist);
}