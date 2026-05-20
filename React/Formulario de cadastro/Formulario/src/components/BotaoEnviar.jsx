function BotaoEnviar({texto, tipo}) {
    return (
    <div>
        <button type={tipo}>{texto}</button>
    </div>
    
    )
}

export default BotaoEnviar;