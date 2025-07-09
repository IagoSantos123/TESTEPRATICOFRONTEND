import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-5xl mx-auto flex items-center h-16 px-4">
      <img
        src={Logo}
        alt="Logo BeTalent"
        style={{ height: "20px" }}
        className="w-auto"
        />
      </div>
    </header>
  );
}