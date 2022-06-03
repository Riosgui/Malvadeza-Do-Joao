import { insertPessoa, updatePessoa } from '../Controller/Pessoa.js'

function pessoa (req, res) {
    if(req.body.id != null){
        updatePessoa(req.body)
    }else{
        insertPessoa(req.body)
    }
    res.json({
        "statusCode": 200
    })
}

export default pessoa;