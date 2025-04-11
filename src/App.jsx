// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Imagem from './Imagem';
import Cabecalho from './Cabecalho';
import Descritivo from './Descritivo';
import lista_botoes from './listabotoes';
import Cards from './Cards';
import JogoSenha from './JogoSenha'; // ajuste o path conforme sua estrutura

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cabecalho />
              <section className="section-main">
                <div className="imagem-container">
                  <Imagem />
                </div>
                <Descritivo />
              </section>
              <Cards lista_cards={lista_botoes} />
            </>
          }
        />
        <Route path="/senha" element={<JogoSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
