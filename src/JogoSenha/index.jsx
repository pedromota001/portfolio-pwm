import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import "./jogo-senha.css";
import { Link } from "react-router-dom";

function gerarSenhaSecreta() {
  const digitos = [];
  while (digitos.length < 4) {
    const numero = Math.floor(Math.random() * 10);
    if (!digitos.includes(numero)) digitos.push(numero);
  }
  return digitos.join("");
}

function calcularBullsECows(tentativa, senha) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < tentativa.length; i++) {
    if (tentativa[i] === senha[i]) {
      bulls++;
    } else if (senha.includes(tentativa[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}

export default function JogoSenha() {
  const [senha, setSenha] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    setSenha(gerarSenhaSecreta());
  }, []);

  useEffect(() => {
    document.body.classList.add("body-jogo");
    return () => {
      document.body.classList.remove("body-jogo");
    };
  }, []);

  const lidarComTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || !/^[0-9]+$/.test(tentativa)) {
      Swal.fire({
        title: "Digite um número com 4 dígitos únicos (0-9)",
        icon: 'error',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      })
      return;
    }

    const resultado = calcularBullsECows(tentativa, senha);
    if(resultado.bulls === 4){
      Swal.fire({
        title: 'Você acertou!!!!!!! Parabéns.',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      })
      
      const nova_tentativa = {
        tentativa: tentativa,
        bulls: resultado.bulls,
        cows: resultado.cows
      };
      
      setHistorico(prev => [nova_tentativa, ...prev]);
      setTentativa("");
    }else{
      const nova_tentativa = {
        tentativa: tentativa,
        bulls: resultado.bulls,
        cows: resultado.cows
      };
      
      setHistorico(prev => [nova_tentativa, ...prev]);
      setTentativa("");
    }
  };

  const tentar_novamente = () => {
    const senha = gerarSenhaSecreta();
    setSenha(senha)
    setHistorico([])
    setTentativa("")
  }

  return (
    <div className="div-geral">
      <div className="div-geral-div-title">
        <h1>Jogo da Senha</h1>
        <h2>(Bulls and Cows)</h2>
      </div>
      <input
        type="text"
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
        placeholder="Digite 4 dígitos únicos"
        maxLength={4}
        className="input-jogo"
      />
      <button onClick={lidarComTentativa} className="btn-tentar">
        Tentar
      </button>
      <div className="botoes-container">
        <button onClick={() => alert("Senha secreta: " + senha)} className="btn-ver-senha">
          Ver senha secreta
        </button>
        <button onClick={tentar_novamente} className="btn-sortear-senha">
          Sortear outra senha
        </button>
      </div>
      <h2>Tentativas</h2>
      <ul className="lista-tentativas">
        {historico.map((item, index) => (
          <li key={index}>
            {item.tentativa} → {item.bulls} Bulls, {item.cows} Cows
          </li>
        ))}
      </ul>
      <button
        className="btn-portfolio"
        onClick={() => window.location.href = "/"}
      >
        Voltar ao Portfólio
      </button>
    </div>
  );
}
