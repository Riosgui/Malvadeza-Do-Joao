import { selectMusic, selectOneMusic, insertMusic, updateMusic, deleteMusic } from '../Controller/ControllMusics.js'

export function musicInsert (req, res) {
    insertMusic(req.body)
    res.json({
        "statusCode": 200
    })
}

export function musicUpdate (req, res){
    updateMusic(req.body)
    res.json({
        "statusCode": 200
    })
}

export async function musicSelectAll(req, res){
    let res_music = await selectMusic();
    res.json(res_music);
}

export async function musicSelectOne(req, res){
    let res_music = await selectOneMusic(req.body.id);
    res.json(res_music);
}

export async function musicDelete(req, res){
    let res_music = await deleteMusic(req.body.id);
    res.json(res_music);
}