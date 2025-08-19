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
    <section id="abput" className="md:h-screen">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque
        aliquid sapiente voluptatibus dolor accusamus, autem atque corrupti
        sunt, quo cum asperiores hic, totam rem? Reprehenderit voluptatibus
        cupiditate doloribus dicta maxime! Delectus, aspernatur. Alias nulla
        qui, placeat eos laboriosam facilis magnam esse molestiae fuga
        reprehenderit odit consectetur modi? Ad, placeat!
      </p>
      <div className="tech-stack-container flex flex-wrap justify-center items-center gap-20 relative">
        {techStack.map((tech, i) => {
          return (
            <div
              key={i}
              className="tech-stack bg-gray-100 md:w-52 md:h-52 flex justify-center items-center "
            >
              <img src={tech.img} alt={tech.name} />
              <h1 className="absolute"> {tech.name} </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
