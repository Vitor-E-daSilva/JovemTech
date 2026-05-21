import express from 'express'
import cors from 'cors'


const servidor = express()
servidor.use(cors())
servidor.use(express.json())

const registros = [] // "DB" em tempo de execução

servidor.post('/registros', (req, res) => {
    const dados = req.body // pega o corpo da requisição
    const duplicata = registros.find(r => r.nome.toLowerCase().trim() === dados.nome.toLowerCase().trim())

    if (!dados.nome) {
        return res.status(400).json({
            erro: "Campo de nome é Obrigatório!"
        })
        
    } else if (duplicata) {
        return res.status(409).json({
            erro: "Usuário já cadastrado"
        })
    } else if(dados.nome.length > 100) {
        return res.status(400).json({
            erro: "Limite máximo de caracteres alcançado"
        })
    }

    console.log(`Dados da requisição!
        O que tem no corpo que o front end me mandou : ${dados}`)
    if (registros.length > 0) {
        dados.id = registros[registros.length - 1].id + 1
    } else {
        dados.id = 1
    }
    dados.ativo = true
    registros.push(dados) // simulando salvar dados no banco


    res.status(201).json({
        sucesso: true,
        mensagem: "Registro Criado Com Sucesso!",
        dados: dados
    })

})

servidor.get("/registros", (req, res) => {
    // const pedido = req.body
    // if (pedido) {
    // var resposta = []
    // } else { 
    // var resposta = registros

    // for (let user in registros) {
    //     if (pedido in user){
    //         resposta.push(user)
    //     }
    // }}
    res.status(200).json(registros)
})

servidor.get("/", (req,res) => (
    res.status(200).json({
        mensagem: "Vamos nessa, Servidor no ar BEBE!",
        status: "ok 100%"
    })
))

servidor.listen(3000, () =>{
    console.log('Algo aconteceu em '+ 'http://localhost:3000')
})