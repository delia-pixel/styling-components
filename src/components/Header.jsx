import logo from "../assets/logo.png";
// import "./Header.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 md:mb-16 mb-8">
      <img
        className="w-44 h-44 mb-8 object-contain"
        src={logo}
        alt="A canvas"
      />
      <h1 className="text-xl md:text-4xl font-semibold text-center uppercase text-amber-800 tracking-widest font-custom">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
