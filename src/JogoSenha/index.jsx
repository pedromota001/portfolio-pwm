import React, { useEffect, useState } from "react";

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

  const lidarComTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || !/^[0-9]+$/.test(tentativa)) {
      alert("Digite um número com 4 dígitos únicos (0-9)");
      return;
    }

    const resultado = calcularBullsECows(tentativa, senha);
    if(resultado.bulls === 4){
      alert("Você acertou a senha!!!!! Parabéns")
      const nova_tentativa = {
        tentativa: tentativa,
        bulls: resultado.bulls,
        cows: resultado.cows
      };
      
      setHistorico(prev => [nova_tentativa, ...prev]);
      setTentativa("");
      //modificar e estilizar página
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

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1>Jogo da Senha (Bulls and Cows)</h1>
      <input
        type="text"
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
        placeholder="Digite 4 dígitos únicos"
        maxLength={4}
        style={{ padding: 10, fontSize: 16, width: "100%" }}
      />
      <button onClick={lidarComTentativa} style={{ padding: 10, marginTop: 10, width: "100%" }}>
        Tentar
      </button>
      <button onClick={() => alert("Senha secreta: " + senha)} style={{ marginTop: 10 }}>
        Ver senha secreta
      </button>

      <h2 style={{ marginTop: 20 }}>Tentativas</h2>
      <ul>
        {historico.map((item, index) => (
          <li key={index}>
            {item.tentativa} → {item.bulls} Bulls, {item.cows} Cows
          </li>
        ))}
      </ul>
    </div>
  );
}
