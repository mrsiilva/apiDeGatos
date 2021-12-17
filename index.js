const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const conexao = require("./database/database")
const Gato = require("./database/Gato")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

conexao
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados')
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })


//retorna a listagem de todos os gatinhos que tem no nosso sistema
app.get("/cats",(req, res) => {
    Gato.findAll({raw:true, order: [
        ['id', 'DESC']
    ]}).then(gatos => {
        res.statusCode = 200 //é necessario passar status code em todas as suas respostas
        res.json({gatos: gatos})
    })
})

app.get("/cat/:id", (req, res) => {

    var id = req.params.id
    Gato.findOne({
        where: {id: id}
    }).then(gato => {
        if(gato != undefined){
            res.statusCode = 200
            res.json({gato: gato})
        }
        else{
            res.sendStatus(404)
        }
    })    
})

//endpoint para cadastrar um gatinho
app.post("/cat", (req, res) => {
    var {nome, raca} = req.body //é assim que se pega dados atraves do metodo post. Usando req.body e o nome do dado
                                //nesse caso estamos pegando nome e raca
        Gato.create(({
            nome: nome,
            raca: raca,
        })).then(() => {
            res.sendStatus(200)
        })

})

//endpoint para deletar um gatinho //lembra de por autenticacao pra so voce ter acesso
app.delete("/cat/:id", (req, res) => {
    var id = req.params.id
    if(id != undefined){
        if(!isNaN(id)){
            Gato.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.sendStatus(200)
            })
        }
        } else {
            res.sendStatus(404)
        }
})

app.listen(4567, () => {
    console.log("Api rodando...")
})