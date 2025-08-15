// sections/Home.jsx
export default function Home({ theme }) {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  const projects = [
    { title: "Portfolio", description: "My personal portfolio", link: "#" },
    { title: "E-Shop", description: "React + Tailwind project", link: "#" },
    { title: "Blog", description: "Responsive blog layout", link: "#" },
  ];

  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white">
        Hi, I’m Irina
      </h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
        Frontend Developer & Designer
      </p>
      <a
        href="#projects"
        className="px-6 py-3 rounded bg-purple-400 dark:bg-purple-700 text-white hover:scale-105 transition-transform"
      >
        View Projects
      </a>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center mt-12 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transition-transform text-black dark:text-white"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Projects Preview */}
      <div
        id="projects"
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition-shadow text-black dark:text-white"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
