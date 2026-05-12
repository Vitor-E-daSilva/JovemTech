import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import FormularioCadastro from './components/FormularioCadastro'
import Contador from './components/Contador'

function App() {

  return (
    <div>
      <Cabecalho/>
      <h1>Olá, mundo!</h1>
      <p>Primeira aula de react</p>
      <FormularioCadastro />
      <Rodape/>
      <Contador/>
    </div>
  )
}

export default App
