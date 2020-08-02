import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  let final = 0;

  dados.compras.filter((valores) => {
    final = final + Number(valores.preco.replace("R$ ", ""));
  });

  return (
    <div>
      <p>Sou uma pagina!</p>
      <p> Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p style={{ color: dados.ativa ? "green" : "red" }}>
        Situação: {dados.ativa ? "Ativa" : "Inativo"}
      </p>
      <p>Total gasto: {final}</p>
      <p>{final > 10000 ? "Você esta gastando muito!" : ""}</p>
    </div>
  );
};

export default App;
