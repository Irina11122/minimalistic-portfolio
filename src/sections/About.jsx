export default function About() {
  const techStack = [
    {
      name: 'HTML',
      img: '/logos/html.jpg',
    },
    {
      name: 'CSS',
      img: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png',
    },
    {
      name: 'JAVASCRIPT',
      img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    {
      name: 'REACT',
      img: 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png',
    },
    {
      name: 'TAILWIND CSS',
      img: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg',
    },
    {
      name: 'BOOTSTRAP',
      img: 'https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png',
    },
    {
      name: 'THREE.JS',
      img: 'https://products.fileformat.com/3d/javascript/threejs/header-image.png',
    },
    {
      name: 'FRAMER-MOTION',
      img: 'https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png',
    },
    {
      name: 'GSAP',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUASnkyRvUnJRW94LrX7WDDB0aJB3k15O2A&s',
    },
    {
      name: 'FIGMA',
      img: 'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png',
    },
  ];
  return (
    <section id="about" className="md:h-screen">
      <h1>About me</h1>
      <p>
        <p>
          Hi! I'm Irina, a Frontend Developer with a background in Graphic
          Design. I love creating interactive, modern, and responsive web
          experiences. My toolkit includes React, Three.js, Tailwind CSS, and
          more. When I'm not coding, you can find me drawing or hanging out with
          my pets.
        </p>
      </p>
      <div className="tech-stack-container flex flex-wrap justify-center items-center gap-20 relative">
        {techStack.map((tech, i) => {
          return (
            <div
              key={i}
              className="tech-stack relative bg-gray-100 md:w-40 md:h-40 flex justify-center items-center rounded-lg shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-20 h-20 md:w-24 md:h-24"
              />
              <h1 className="absolute text-black font-bold text-lg opacity-0 hover:opacity-100">
                {tech.name}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
