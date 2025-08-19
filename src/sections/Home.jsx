import { VscGithubAlt } from 'react-icons/vsc';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TbFileCv } from 'react-icons/tb';

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col gap-20 justify-center items-center h-screen "
    >
      <div className="home-line"></div> <div className="other-home-line"></div>
      <div className="bottom-home-line"></div>
      <div className="triangle"></div>
      <div>
        <h1 className="text-5xl uppercase mb-5 comfortaa-400 text-my-purple">
          Hi I am{' '}
          <span className="text-7xl text-neon-purple comfortaa-700">
            IRINA BOJKOVSKA,
          </span>
        </h1>
        <h3 className="text-3xl text-gray-500">
          a FRONTEND DEVELOPER & GRAPHIC DESIGNER
        </h3>
      </div>
      <div className="flex gap-20 text-gray-100">
        <div>
          {' '}
          <button className="text-2xl bg-my-purple p-10">
            <a href="#projects">SEE MY WORK</a>
          </button>
        </div>

        <div className="flex gap-8 text-2xl p-10 bg-gray-purple">
          <a href="https://github.com/Irina11122">
            <VscGithubAlt size={40} />
          </a>
          <a href="#">
            <FaInstagram size={40} />
          </a>
          <a href="/complete-cv-irina.pdf">
            <TbFileCv size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
