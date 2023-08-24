import { useEffect, useState } from "react"

import Formulario from "./components/Formulario";
import InfoIMC from "./components/InfoImc";

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState('');
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [genero, setGenero] = useState('');
  const [imc, setImc] = useState(0)
  const [botaoClick, setBotao] = useState(false)

  useEffect(() => {
    
    const IMC = parseInt(peso) / (parseFloat(altura) * parseFloat(altura))

    setImc(IMC.toFixed(1))
    
  }, [peso, altura])

  return (
    <>
      <Formulario getNome={(e) => setNome(e.target.value)} getIdade={(e) => setIdade(e.target.value)} getEmail={(e) => setEmail(e.target.value)} getAltura={(e) => setAltura(e.target.value)} getPeso={(e) => setPeso(e.target.value)} getGenero={(e) => setGenero(e.target.value)} setBotao = {setBotao} hide = {botaoClick}/>
      <InfoIMC setNome={nome} setIdade={idade} setGenero={genero} setAltura={altura} setPeso={peso} setImc={imc} setEmail={email} hide = {botaoClick} setBotao = {setBotao}/>
    </>
  )
}

export default App
