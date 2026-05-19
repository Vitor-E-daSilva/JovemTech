import InputField from "./InputField"
import BotaoEnviar from "./BotaoEnviar"
import { useEffect, useState } from "react";

function FormularioCadastro() {
    // Versão com constantes únicas para cada informação.
    // const [nome,setNome] = useState('')
    // const [email, setEmail] = useState('')
    // const [senha, setSenha] = useState('')
    // const [id, setId] = useState('')
    // const [erro, setErro] = useState('')
    // const [sucesso, setSucesso] = useState(false)
    const [user, setUser] = useState({nome:"",email:"",senha:"",id:""})
    const [verificacao, setVerificacao] = useState({erro:"",sucesso:false})
    const [registros,setRegistros] = useState('')

    const buscarRegistros = async (e) => {
        const resposta = await fetch('http://localhost:3000/registros')
        const dados = await resposta.json()
        setRegistros(dados)
        
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()

        setVerificacao((dados) => ({
                    ...dados,
            sucesso:false}))

        if (user.nome.trim() === ''){
            setVerificacao((dados) => ({
                    ...dados,
            erro:'O campo Nome é obrigatório'}))
            return
        } else if((user.email.split('.').length) < 2) {
            setVerificacao((dados) => ({
                    ...dados,
            erro:'Endereço de email inválido!'}))
            return
        } else if(user.senha.length < 8) {
            setVerificacao((dados) => ({
                    ...dados,
            erro:'Senha precisa ter 8 digitos!'}))
            return
        } else if(user.id === '0') {
            setVerificacao((dados) => ({
                    ...dados,
            erro:'Insira um id válido!'}))
            return
        } else if(user.id.trim() === ''){
            setVerificacao((dados) => ({
                    ...dados,
            erro:'O campo id é obrigatório!'}))
            return
        }

        try {
            const reposta = await fetch('http://localhost:3000/registros', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            })
            const resultado = await reposta.json()
            console.log(resultado)

        } catch (error){
            console.log('Erro ao conectar ao servidor ', error)
            return
        }

        setVerificacao((dados) => ({
                    ...dados,
            erro:''}))
        setVerificacao((dados) => ({
                    ...dados,
            sucesso:true}))
        console.log(user)
        
        setUser({nome:"",email:"",senha:"",id:""})
        location.reload()
    }

    useEffect(() => {
    // fetch('http://localhost:3000/registros')
    // .then(res => res.json())
    // .then(dados => console.log(dados))
    buscarRegistros()

    }, [])

    return (
    <section>
        <form onSubmit={handlerSubmit}>
            {verificacao.erro && <p style={{color: 'red'}}>{verificacao.erro}</p>}
            {verificacao.sucesso && <p style={{color: 'green'}}>Cadastrado com sucesso!</p>}
            <InputField 
                label={"Nome : "} 
                type={"text"} 
                name={"nome"} 
                placeholder={"Seu nome..."} 
                value={user.nome} 
                onChange={(e) => {setUser((dados) => ({
                    ...dados,
                    nome: e.target.value
                    })); 
                    setVerificacao((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacao((dados) => ({
                    ...dados,
                    sucesso:false}))
                }}
            />
            <InputField 
                label={"Email : "} 
                type={"email"} 
                name={"email"} 
                placeholder={"exemplo@email.com"}
                value={user.email} 
                onChange={(e) => {setUser((dados) => ({
                    ...dados,
                    email: e.target.value
                    })); 
                    setVerificacao((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacao((dados) => ({
                    ...dados,
                    sucesso:false}))
                }}
            />
           <InputField 
                label={"Senha : "} 
                type={"password"} 
                name={"senha"} 
                placeholder={"Sua senha..."} 
                value={user.senha} 
                onChange={(e) => {setUser((dados) => ({
                    ...dados,
                    senha: e.target.value
                    })); 
                    setVerificacao((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacao((dados) => ({
                    ...dados,
                    sucesso:false}))
                }}
            />
           <InputField 
                label={"ID : "} 
                type={"number"} 
                name={"id"} 
                placeholder={"Seu id..."}
                value={user.id} 
                onChange={(e) => {setUser((dados) => ({
                    ...dados,
                    id: e.target.value
                    })); 
                    setVerificacao((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacao((dados) => ({
                    ...dados,
                    sucesso:false}))
                }}
            />
            <br />
           <BotaoEnviar texto={"Enviar"}/>
        </form>

        <div>
            <br />
            <p>Nome de Usuário : {user.nome}</p>
            <p>Email : {user.email}</p>
            <p>ID : {user.id}</p>

            {registros.length > 0 && (
                <ul>
                    {registros.map((item,index) => (
                        <li key={index} >
                            {index} - {item.nome} - {item.email} - {item.id}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </section>

    
    )
}

export default FormularioCadastro;