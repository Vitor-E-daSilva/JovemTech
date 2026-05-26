import InputField from "./InputField"
import BotaoEnviar from "./BotaoEnviar"
import { useEffect, useState, useRef } from "react" // import atualizado
import { useRegistros } from "../hooks/useRegistros";

function FormularioCadastro() {

    const [user, setUser] = useState({nome:"",email:"",senha:"",numero:""})
    const nomeRef = useRef(null) //Cria referência
    const [indiceEditando, setIndiceEditando] = useState(null)
    const {registros, carregando, erro, buscar, criar, atualizar, deletar} = useRegistros()
    const [verificacaoForm, setVerificacaoForm] = useState({erro:"",sucesso:false})
    
    const handlerSubmit = async (e) => {
        e.preventDefault()

        setVerificacaoForm((dados) => ({
                    ...dados,
            sucesso:false}))

        if (user.nome.trim() === ''){
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro:'O campo Nome é obrigatório'}))
            return
        } else if((user.email.split('.').length) < 2) {
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro:'Endereço de email inválido!'}))
            return
        } else if(user.senha.length < 8) {
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro:'Senha precisa ter 8 digitos!'}))
            return
        } else if(user.id === '0') {
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro:'Insira um id válido!'}))
            return
        } else if(user.numero.trim() === ''){
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro:'O campo de número é obrigatório!'}))
            return
        }

        try {
            if (indiceEditando !== null) {
                await atualizar(indiceEditando, user)
            } else {
                await criar(user)
            }
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro: ''}))
        } catch (e){
            setVerificacaoForm((dados) => ({
                    ...dados,
            erro: e.message}))
            return
        }

        buscar()

        setVerificacaoForm((dados) => ({
                    ...dados,
            erro:''}))
        setVerificacaoForm((dados) => ({
                    ...dados,
            sucesso:true}))
        console.log(user)
        setUser({nome:"",email:"",senha:"",numero:""})
        setIndiceEditando(null)
        
    }

    const handlerEditar = (index) => {
        const registro = registros[index]

        setUser({nome: registro.nome,
                email: registro.email,
                senha: registro.senha,
                numero: registro.numero})
        
        setIndiceEditando(index) // Muda para modo de edição
        nomeRef.current.focus()
    }

    useEffect(() => {
        buscar()
        nomeRef.current.focus()
    }, [])

    return (
    <section>
        <form onSubmit={handlerSubmit}>
            {erro && <p style={{color: 'red'}}>{erro}</p>}
            {verificacaoForm.erro && <p style={{color: 'red'}}>{verificacaoForm.erro}</p>}
            {verificacaoForm.sucesso && <p style={{color: 'green'}}>Cadastrado com sucesso!</p>}
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
                    setVerificacaoForm((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacaoForm((dados) => ({
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
                    setVerificacaoForm((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacaoForm((dados) => ({
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
                    setVerificacaoForm((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacaoForm((dados) => ({
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
                    setVerificacaoForm((dados) => ({
                    ...dados,
                    erro:''}));
                    setVerificacaoForm((dados) => ({
                    ...dados,
                    sucesso:false}))
                }}
            />
            <br />
            {carregando && <BotaoEnviar tipo={"button"} texto={"Carregando..."}/>}
            {!carregando && <BotaoEnviar tipo={"submit"} texto={indiceEditando !== null ? "Atualizar" : "Cadastrar"}/>}
        
            {indiceEditando !== null &&(
                <button type="button" onClick={() =>{
                    setIndiceEditando(null)
                    setUser({nome:"",email:"",senha:"",numero:""})
                }}>
                    Cancelar edição
                </button>
            )}
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
                           <span> {index} - {item.nome} - {item.email} - {item.numero}</span>
                        
                            <div style={{border: "2px olid #F4FF5B",
                            borderRadius: "4px", padding: "4px",
                            boxShadow: "0 0 10px #F4FF5B"}}>
                                <button onClick={() => handlerEditar(index)}>
                                    Editar
                                </button>
                                <button onClick= {()=> deletar(index)}>
                                    Deletar
                                </button>
                            </div>
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