import { useEffect, useState } from "react"

export default function Contador() {
    const[count, setCount] = useState(0)
    
    useEffect(() => {
    // código executa aqui
    document.title ="Contador apareceu na tela " + count
    console.log("Contador apareceu na tela!")
  }, [/* dependências */ count])

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Somar
            </button>
        </div>
    )
}