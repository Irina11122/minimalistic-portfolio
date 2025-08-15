import ParticleBackground from "./components/ParticalBackground";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import { useEffect, useState } from "react";
import About from "./sections/About";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="relative w-full transition-colors duration-500"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(180deg, #000000, #1a1a1a)"
            : "linear-gradient(180deg, #F0F5FF, #D2E0FB)",
      }}
    >
      <ParticleBackground theme={theme} />
      <div></div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
    </div>
  );
}
