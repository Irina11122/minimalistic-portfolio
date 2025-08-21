import { useEffect, useState } from 'react';
import { LuSunMoon } from 'react-icons/lu';
import useLocalStorage from '../hook/useLocalStorage';
import { FaBars, FaXingSquare } from 'react-icons/fa';
import { FaFaceDizzy } from 'react-icons/fa6';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage('dark', 'theme');
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <div className="flex justify-center relative">
      <header className="fixed md:w-w-90% w-full bg-my-purple flex justify-between h-20 items-center  z-20 md:top-5 top-2 dark-header">
        <h1 className="w-52 text-start uppercase text-dark-purple dark:text-gold text-2xl flex items-center justify-center">
          <div className="flex flex-col justify-center items-center mx-4">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          Irina Bojkovska
        </h1>
        <nav className="items-center gap-20 text-2xl md:flex hidden text-gray-purple dark:text-gray-100">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="md:w-20 md:h-20 md:flex hidden rounded-full"
          >
            <LuSunMoon size={50} className="m-auto" color="gold" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden mr-2 text-dark-purple dark:text-gold"
          >
            <FaBars size={50} />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="">
          <nav className="fixed uppercase bg-dark-purple dark:bg-gray-purple dark:text-2xl text-gray-50 playfair-display-sc-regular text-2xl h-screen top-0 right-0 w-screen flex flex-col gap-24 py-20 items-center z-50 transition-all">
            <FaFaceDizzy
              onClick={() => setIsOpen(false)}
              size={50}
              className="z-50 absolute top-5 right-5 dark:hover:text-gold"
            />
            <a
              href="#home"
              className="dark:hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="dark:hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="dark:hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="dark:hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="md:w-20 md:h-20 md:hidden rounded-full"
            >
              <LuSunMoon size={50} className="m-auto dark:hover:text-gold" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
