import InputField from "./InputField"
import BotaoEnviar from "./BotaoEnviar"
import { useState } from "react";

function FormularioCadastro() {
    const [nome,setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [id, setId] = useState('')
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSucesso(false)
        if (nome.trim() === ''){
            setErro('O campo Nome é obrigatório')
            return
        } else if((email.split('.')) < 2) {
            setErro('Endereço de email inválido!')
            return
        } else if((senha) < 8) {
            setErro('Senha precisa ter 8 digitos!')
            return
        } else if(id === 0) {
            setErro('Insira um id válido!')
            return
        }
        setErro('')
        setSucesso(true)
        console.log({nome,email,senha,id})
        
        setNome('')
        setEmail('')
        setSenha('')
        setId('')
    }

    return (
    <section>
        <form onSubmit={handleSubmit}>
            {erro && <p style={{color: 'red'}}>{erro}</p>}
            {sucesso && <p style={{color: 'green'}}>Cadastrado com sucesso!</p>}
            <InputField 
                label={"Nome : "} 
                type={"text"} 
                name={"nome"} 
                placeholder={"Seu nome..."} 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}
            />
            <InputField 
                label={"Email : "} 
                type={"email"} 
                name={"email"} 
                placeholder={"exemplo@email.com"}
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
           <InputField 
                label={"Senha : "} 
                type={"password"} 
                name={"senha"} 
                placeholder={"Sua senha..."} 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)}
                />
           <InputField 
                label={"ID : "} 
                type={"number"} 
                name={"id"} 
                placeholder={"Seu id..."}
                value={id} 
                onChange={(e) => setId(e.target.value)}
                />

           <BotaoEnviar texto={"Enviar"}/>
        </form>

        <div>
            <p>Nome de Usuário : {nome}</p>
            <p>Email : {email}</p>
            <p>ID : {id}</p>
        </div>
    </section>
    )
}

export default FormularioCadastro;