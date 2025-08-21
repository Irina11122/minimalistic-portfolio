import { useEffect, useState } from "react";

export default function About() {
  const techStack = [
    { name: "HTML", img: "/logos/html.jpg" },
    {
      name: "CSS",
      img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
    },
    {
      name: "JAVASCRIPT",
      img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      name: "REACT",
      img: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
    },
    {
      name: "TAILWIND CSS",
      img: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    },
    {
      name: "BOOTSTRAP",
      img: "https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png",
    },
    {
      name: "THREE.JS",
      img: "https://products.fileformat.com/3d/javascript/threejs/header-image.png",
    },
    {
      name: "FRAMER-MOTION",
      img: "https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png",
    },
    {
      name: "GSAP",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUASnkyRvUnJRW94LrX7WDDB0aJB3k15O2A&s",
    },
    {
      name: "FIGMA",
      img: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png",
    },
  ];

  const [lines, setLines] = useState([]);

  useEffect(() => {
    const generatedLines = Array.from({ length: 100 }, (____, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 90}%`,
      width: `${90 + Math.random() * 150}px`,
    }));
    setLines(generatedLines);
  }, []);

  return (
    <section
      id="about"
      className="flex justify-center items-center p-4 md:h-screen"
    >
      <div className="flex flex-col md:flex-row relative w-full max-w-6xl h-[70vh] border-4 border-purple-300  dark:border-gold dark:text-gold overflow-hidden">
        <div className="flex-1 p-6 overflow-y-auto z-20">
          <h1 className="text-4xl mb-6">About me</h1>
          <p className="mb-6 leading-8">
            Hi! I'm Irina, a Frontend Developer with a background in Graphic
            Design. I love creating interactive, modern, and responsive web
            experiences. My toolkit includes React, Three.js, Tailwind CSS, and
            more. When I'm not coding, you can find me drawing or hanging out
            with my pets.
          </p>
          <h2 className="text-2xl mb-4">My TECH STACK</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="tech-stack w-32 h-32 md:w-40 md:h-40 flex justify-center items-center rounded-lg shadow-md hover:shadow-xl cursor-pointer relative bg-gray-100"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <h1 className="absolute opacity-0 hover:opacity-100 text-black font-bold">
                  {tech.name}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="md:flex-1 hidden relative z-10">
          {/* Силуета */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <img src="/sil.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-0 right-0 w-full h-full z-20">
            {lines.map((line) => (
              <div
                key={line.id}
                className="absolute h-2 bg-purple-900"
                style={{
                  top: line.top,
                  left: line.left,
                  width: line.width,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
