import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { formatarData } from "../utils/formatarData";
import { formatarTelefone } from "../utils/formatarTelefone";

type Funcionario = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export default function LinhaTabela({ funcionario }: { funcionario: Funcionario }) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <tr className="border-b border-[#DFDFDF] hover:bg-[#EDEFFB] font-sans text-[#111] text-[16px]">
        <td className="py-4 px-3">
          <img
            src={funcionario.image}
            alt={funcionario.name}
            className="w-16 h-16 rounded-full object-cover border border-[#E0E0E0]"
          />
        </td>
        <td className="py-4 px-3 font-normal">{funcionario.name}</td>
        {/* Extras só em telas md+ */}
        <td className="py-4 px-3 hidden md:table-cell">{funcionario.job}</td>
        <td className="py-4 px-3 hidden md:table-cell">{formatarData(funcionario.admission_date)}</td>
        <td className="py-4 px-3 hidden md:table-cell">{formatarTelefone(funcionario.phone)}</td>
        {/* Mobile: seta */}
        <td className="py-4 px-3 md:hidden text-right">
          <button
            className="focus:outline-none"
            aria-label={aberto ? "Ocultar detalhes" : "Exibir detalhes"}
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? (
              <ChevronUpIcon className="w-5 h-5 text-[#0500FF] mx-auto transition-all" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-[#0500FF] mx-auto transition-all" />
            )}
          </button>
        </td>
      </tr>
      {/* Linha expandida mobile */}
      {aberto && (
        <tr className="md:hidden">
          <td colSpan={3} className="pb-4 px-3 bg-[#F9F9F9] border-b border-[#DFDFDF]">
            <div className="flex flex-col gap-2 text-[15px]">
              <div>
                <span className="font-semibold text-[#222]">Cargo: </span>
                <span>{funcionario.job}</span>
              </div>
              <div>
                <span className="font-semibold text-[#222]">Data de Admissão: </span>
                <span>{formatarData(funcionario.admission_date)}</span>
              </div>
              <div>
                <span className="font-semibold text-[#222]">Telefone: </span>
                <span>{formatarTelefone(funcionario.phone)}</span>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}