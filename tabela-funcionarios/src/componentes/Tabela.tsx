import LinhaTabela from "./LinhaTabela";

type Funcionario = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export default function Tabela({ funcionarios }: { funcionarios: Funcionario[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full rounded-xl overflow-hidden shadow-lg min-w-[300px] bg-white">
      <thead className="bg-[#0500FF] text-white text-left uppercase text-[15px] tracking-wide relative">
        <tr>
            <th className="py-4 px-3 font-bold">Foto</th>
            <th className="py-4 px-3 font-bold">Nome</th>
            <th className="py-4 px-3 font-bold hidden md:table-cell">Cargo</th>
            <th className="py-4 px-3 font-bold hidden md:table-cell">Data de Admissão</th>
            <th className="py-4 px-3 font-bold hidden md:table-cell">Telefone</th>
            <th className="py-4 px-3 font-bold md:hidden relative">
            {/* Pontinho branco centralizado verticalmente e alinhado à direita */}
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
            </th>
        </tr>
        </thead>

        <tbody>
          {funcionarios.map((f) => (
            <LinhaTabela key={f.id} funcionario={f} />
          ))}
        </tbody>
      </table>
    </div>
  );
}