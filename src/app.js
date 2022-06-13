import express from 'express';
import cors from 'cors';
import { createTableMusic } from './Controller/ControllMusics.js';
import { musicDelete, musicInsert, musicSelectAll, musicSelectOne, musicUpdate} from './Dep/musicFunctions.js';

createTableMusic()

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', function(req, res){
    res.send('A bolsinha está sendo rodada')
})

app.get('/musicAll', musicSelectAll)

app.get('/musicOne', musicSelectOne)

app.post('/musicInsert', musicInsert)

app.put('/musicUpdate', musicUpdate)

app.delete('/musicDelete', musicDelete)

app.listen(process.env.PORT || 4000, () => console.log("O portal pro inferno foi aberto."))