import Header from '../componentes/Header';
import CampoBusca from '../componentes/CampoBusca';
import Tabela from '../componentes/Tabela';

type Funcionario = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

type FuncionariosPageProps = {
  funcionarios: Funcionario[];
  busca: string;
  setBusca: (valor: string) => void;
};

export default function FuncionariosPage({ funcionarios, busca, setBusca }: FuncionariosPageProps) {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      <div className="max-w-5xl mx-auto mt-8 p-8 rounded-lg bg-[#F2F2F2] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h1 className="text-[24px] font-semibold text-[#222] mb-4 md:mb-0">Funcionários</h1>
          <CampoBusca valor={busca} aoMudar={setBusca} />
        </div>
        <Tabela funcionarios={funcionarios} />
      </div>
    </div>
  );
}