import InputField from "./InputField";

function FormularioCadastro() {
    return (
        <div>
           <InputField label={"Nome : "} type={"text"} name={"nome"}/>
           <InputField label={"Email : "} type={"email"} name={"email"} />
           <InputField label={"Senha : "} type={"password"} name={"senha"} />
           <InputField label={"Idade : "} type={"number"} name={"idade"}/>
           <InputField label={"Data : "} type={"date"} name={"data"} />
           <InputField label={"Cor : "} type={"color"} name={"cor"} />
           <InputField label={"Pdf : "} type={"file"} name={"pdf"} />
        </div>
        
    )
}

export default FormularioCadastro;