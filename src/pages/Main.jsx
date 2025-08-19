import { useEffect, useState } from 'react';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';

export default function Main() {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
