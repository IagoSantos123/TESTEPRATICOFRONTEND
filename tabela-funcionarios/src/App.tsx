import React, { useEffect, useState } from "react";
import { buscarFuncionarios } from "./servicos/api";
import FuncionariosPage from "./pages/FuncionariosPage";

type Funcionario = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

function App() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregar() {
      const dados = await buscarFuncionarios();
      setFuncionarios(dados);
    }
    carregar();
  }, []);

  const filtrados = funcionarios.filter((f) =>
    `${f.name} ${f.job} ${f.phone}`
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  return (
    <FuncionariosPage
      funcionarios={filtrados}
      busca={busca}
      setBusca={setBusca}
    />
  );
}

export default App;