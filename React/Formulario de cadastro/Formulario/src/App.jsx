import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import FormularioCadastro from './components/FormularioCadastro'
import Contador from './components/Contador'

function App() {

  // useEffect(() => {
  //   // código executa aqui
  //   console.log("Contador apareceu na tela!")
  // }, [/* dependências */])

  return (
    <div>
      <Cabecalho/>
      <br />
      <FormularioCadastro />
      <br />
      <Contador/>
      <br />
      <Rodape/> 
    </div> 
  )
}

export default App
