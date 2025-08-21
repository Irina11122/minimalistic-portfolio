import { useEffect, useState } from 'react';

export default function About() {
  const techStack = [
    { name: 'HTML', img: '/logos/html.jpg' },
    {
      name: 'CSS',
      img: '/logos/css-3.png',
    },
    {
      name: 'JAVASCRIPT',
      img: '/logos/js.png',
    },
    {
      name: 'REACT',
      img: '/logos/react.png',
    },
    {
      name: 'TAILWIND CSS',
      img: '/logos/tailwind.png',
    },
    {
      name: 'BOOTSTRAP',
      img: '/logos/bootstrap.png',
    },
    {
      name: 'THREE.JS',
      img: '/logos/three-js.png',
    },
    {
      name: 'FRAMER-MOTION',
      img: '/logos/R.png',
    },
    {
      name: 'GSAP',
      img: '/logos/gsap.jpg',
    },
    {
      name: 'FIGMA',
      img: '/logos/figma_5968705.png',
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
        <div className="flex-1 p-6 overflow-y-auto z-10 dark:bg-black/90">
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

        <div className="md:flex flex-1 hidden  relative z-10">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <img src="/sil.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-0 right-0 w-full h-full z-20">
            {lines.map((line) => (
              <div
                key={line.id}
                className="absolute h-2 bg-purple-900 dark:bg-gold"
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
