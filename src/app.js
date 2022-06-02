import {openDb} from './SQLite/configDB.js'
import pessoa from './Dep/pessoa.js';
import express from 'express';

const app = express();
app.use(express.json())

openDb()

app.get('/', function(req, res){
    res.send('Opa')
})

app.post('/pessoa', pessoa)

app.listen(4000, () => console.log("Quem leu é corno."))