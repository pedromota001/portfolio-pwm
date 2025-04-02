import './App.css'
import Imagem from './Imagem'
import Cabecalho from './Cabecalho'
import Descritivo from './Descritivo'
import lista_botoes from './listabotoes'
import Botoes from './Botoes'
import Cards from './Cards'

function App() {

  return (
    <>
    <Cabecalho/>
    <section className='section-main'>
      <div className='imagem-container'>
        <Imagem/>
      </div>
      <Descritivo/>
    </section>
    <Cards 
    lista_cards = {lista_botoes}
    />
    </>
  )
}

export default App
