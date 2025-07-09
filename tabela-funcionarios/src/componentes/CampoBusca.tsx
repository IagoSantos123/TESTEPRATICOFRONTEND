import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  valor: string;
  aoMudar: (valor: string) => void;
};

export default function CampoBusca({ valor, aoMudar }: Props) {
  return (
    <div className="relative w-full md:w-80">
      <input
        type="text"
        placeholder="Pesquisar"
        value={valor}
        onChange={e => aoMudar(e.target.value)}
        className="w-full p-3 pr-10 rounded-lg border border-[#DFDFDF] bg-white text-[#222] placeholder-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#0500FF] shadow-sm"
        style={{
          boxShadow: "0px 2px 6px 0px #0000000A"
        }}
      />
      <MagnifyingGlassIcon className="w-5 h-5 text-[#9E9E9E] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}