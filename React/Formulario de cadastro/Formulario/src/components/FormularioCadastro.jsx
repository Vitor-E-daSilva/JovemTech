import InputField from "./InputField"
import BotaoEnviar from "./BotaoEnviar"
import { useEffect, useState, useRef } from "react" // import atualizado

function FormularioCadastro() {
    // Versão com constantes únicas para cada informação.
    // const [nome,setNome] = useState('')
    // const [email, setEmail] = useState('')
    // const [senha, setSenha] = useState('')
    // const [id, setId] = useState('')
    // const [erro, setErro] = useState('')
    // const [sucesso, setSucesso] = useState(false)
    const [user, setUser] = useState({nome:"",email:"",senha:"",numero:""})
    const [verificacao, setVerificacao] = useState({erro:"",sucesso:false})
    const [registros,setRegistros] = useState('')
    const nomeRef = useRef(null) //Cria referência


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

        // if (user.nome.trim() === ''){
        //     setVerificacao((dados) => ({
        //             ...dados,
        //     erro:'O campo Nome é obrigatório'}))
        //     return
        //} else if((user.email.split('.').length) < 2) {
        //     setVerificacao((dados) => ({
        //             ...dados,
        //     erro:'Endereço de email inválido!'}))
        //     return
        // } else if(user.senha.length < 8) {
        //     setVerificacao((dados) => ({
        //             ...dados,
        //     erro:'Senha precisa ter 8 digitos!'}))
        //     return
        // } else if(user.id === '0') {
        //     setVerificacao((dados) => ({
        //             ...dados,
        //     erro:'Insira um id válido!'}))
        //     return
        // } else if(user.id.trim() === ''){
        //     setVerificacao((dados) => ({
        //             ...dados,
        //     erro:'O campo id é obrigatório!'}))
        //     return
        //}

        try {
            var reposta = await fetch('http://localhost:3000/registros', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            })
            var resultado = await reposta.json()
            console.log(resultado)

        } catch (error){
            console.log('Erro ao conectar ao servidor ', error)
            return
        }

        const erro = reposta.status

        if(erro === 400){
            const erroEspecifico = resultado.erro
            if (erroEspecifico === 'Campo de nome é Obrigatório!' || erroEspecifico === 'Limite máximo de caracteres alcançado'){
                setVerificacao((dados) => ({
                    ...dados,
            erro:'Nome inválido, deve conter entre 1-100 caracteres!'}))
            return
            }
        } else if(erro === 409) {
            setVerificacao((dados) => ({
                    ...dados,
            erro:'Usuário já cadastrado'}))
            return
        } else if (erro === 200 || erro === 201){
            buscarRegistros()

            setVerificacao((dados) => ({
                        ...dados,
                erro:''}))
            setVerificacao((dados) => ({
                        ...dados,
                sucesso:true}))
        //console.log(user)
            setUser({nome:"",email:"",senha:"",numero:""})
        }
    }
    

    useEffect(() => {
        // fetch('http://localhost:3000/registros')
        // .then(res => res.json())
        // .then(dados => console.log(dados))
        buscarRegistros()
        //document.querySelector('input').focus()
        console.log('ref antes do focus: ', nomeRef.current)
        nomeRef.current.focus()
        console.log('ref depois do focus: ', nomeRef.current)
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
                inputRef = {nomeRef} // Referência a constante
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
                label={"Número : "} 
                type={"number"} 
                name={"numero"} 
                placeholder={"Seu número..."}
                value={user.numero} 
                onChange={(e) => {setUser((dados) => ({
                    ...dados,
                    numero: e.target.value
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
            {!registros && <BotaoEnviar tipo={"button"} texto={"Enviando..."}/>}
            {registros && <BotaoEnviar tipo={"submit"} texto={"Enviar"}/>}
        </form>

        <div>
            <br />
            <p>Nome de Usuário : {user.nome}</p>
            <p>Email : {user.email}</p>
            <p>Número : {user.numero}</p>

            {registros.length > 0 && (
                <ul>
                    {registros.map((item,index) => (
                        <li key={index} >
                            {item.id} - {item.nome} - {item.email} - {item.numero}
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => {nomeRef.current.value ='teste'}}>mudar nome</button>
        </div>
    </section>

    
    )
}

export default FormularioCadastro;