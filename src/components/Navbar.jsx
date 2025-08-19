import { useEffect, useState } from 'react';
import { LuSunMoon } from 'react-icons/lu';
import useLocalStorage from '../hook/useLocalStorage';

export default function Navbar() {
  const [theme, setTheme] = useLocalStorage('dark', 'theme');
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className="flex justify-center">
      <header className="fixed w-w-90% bg-my-purple flex justify-between h-20  z-10 top-5 dark-header">
        <h1 className="w-44 text-start text-dark-purple text-2xl flex items-center justify-center">
          <img src="/logos/logo.png" alt="" />
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
            className="md:w-20 md:h-20 rounded-full"
          >
            <LuSunMoon size={50} className="m-auto" color="white" />
          </button>
        </div>
      </header>
    </div>
  );
}
