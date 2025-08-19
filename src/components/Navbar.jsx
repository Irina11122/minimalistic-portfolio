import { FaSun } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <header className="fixed w-w-90% bg-dark-purple flex justify-between h-20 rounded-full z-10 top-5">
        <h1 className="bg-my-purple rounded-l-full w-72 text-center text-2xl flex items-center justify-center">
          Irina Bojkovska
        </h1>
        <nav className="text-gray-100  items-center gap-20 text-2xl md:flex hidden">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <button className="bg-my-purple md:w-20 md:h-20 rounded-full">
            <FaSun size={50} className="m-auto" color="white" />
          </button>
        </div>
      </header>
    </div>
  );
}
