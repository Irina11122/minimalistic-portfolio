// sections/About.jsx
export default function About({ theme }) {
  const skills = ["JavaScript", "React", "HTML", "CSS", "Three.js", "Tailwind"];

  return (
    <section className="relative z-20 px-6 py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I’m Irina, a Frontend Developer and Designer from North Macedonia. I
          love creating clean, interactive, and visually appealing web experiences.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded shadow text-black dark:text-white"
            >
              {skill}
            </div>
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Outside of coding, I love animals, learning new technologies, and
          exploring cybersecurity.
        </p>

        <a
          href="/CV.pdf"
          className="px-6 py-3 rounded bg-purple-400 dark:bg-purple-700 text-white hover:scale-105 transition-transform"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
