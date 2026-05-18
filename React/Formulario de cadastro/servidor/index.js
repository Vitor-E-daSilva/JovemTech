import express from 'express'
import cors from 'cors'


const servidor = express()
servidor.use(cors())
servidor.use(express.json())

const registros = [] // "DB" em tempo de execução

servidor.post('/registros', (req, res) => {
    const dados = req.body // pega o corpo da requisição
    if (!dados.nome) {
        res.status(400).json({
            erro: "Campo de nome é Obrigatório!"
        })
    }
    console.log(`Dados da requisição!
        O que tem no corpo que o front end me mandou : ${dados}`)
    registros.push(dados) // simulando salvar dados no banco



    res.status(201).json({
        sucesso: true,
        mensagem: "Registro Criado Com Sucesso!",
        dados: dados
    })

})

servidor.get("/registros", (req, res) => (
    res.status(200).json(registros)
))

servidor.get("/", (req,res) => (
    res.status(200).json({
        mensagem: "Vamos nessa, Servidor no ar BEBE!",
        status: "ok 100%"
    })
))

servidor.listen(3000, () =>{
    console.log('Algo aconteceu em '+ 'http://localhost:3000')
})