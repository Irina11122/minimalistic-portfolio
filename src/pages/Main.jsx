import { useEffect, useState } from 'react';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Navbar from '../components/Navbar';
export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
