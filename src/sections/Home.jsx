import { VscGithubAlt } from 'react-icons/vsc';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TbFileCv } from 'react-icons/tb';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen ">
      <div>
        <h1 className="text-5xl uppercase mb-5">
          Hi I am <span className="text-7xl">IRINA BOJKOVSKA,</span>
        </h1>
        <h3 className="text-3xl">a FRONTEND DEVELOPER & GRAPHIC DESIGNER</h3>
      </div>
      <div className="flex gap-20">
        <div>
          {' '}
          <button className="text-2xl">
            <a href="#projects">SEE MY WORK</a>
          </button>
        </div>

        <div className="inline-flex gap-4 text-2xl">
          <a href="#">
            <VscGithubAlt />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <TbFileCv />
          </a>
        </div>
      </div>
    </div>
  );
}
