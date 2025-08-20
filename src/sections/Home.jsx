import { VscGithubAlt } from 'react-icons/vsc';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TbFileCv } from 'react-icons/tb';

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:gap-40 gap-5 justify-center items-center h-screen w-full overflow-x-hidden sm-896:gap-40"
    >
      <div className="home-line"></div>{' '}
      <div className="other-home-line dark:z-20"></div>
      <div className="bottom-home-line ipad:bottom-44 ipad:w-full"></div>
      {/* <div className="triangle"></div> */}
      <div className="z-20">
        <h1 className="md:text-5xl text-4xl my-name uppercase md:mb-5 comfortaa-400 text-my-purple dark:text-gray-300 md:ml-0 ml-10 mb-20 md:mt-0 mt-32">
          Hi I am{' '}
          <span className="md:text-7xl text-4xl text-neon-purple comfortaa-700 dark:text-gold ">
            IRINA BOJKOVSKA,
          </span>
        </h1>
        <h3 className="md:text-3xl text-gray-200 text-end md:mr-0 mr-2">
          a FRONTEND DEVELOPER & GRAPHIC DESIGNER
        </h3>
      </div>
      <div className="flex md:flex-row flex-col gap-14 md:items-center md:justify-center text-gray-100 w-full ">
        <div className="md:float-none float-start md:pl-0 pl-3">
          {' '}
          <button className="md:text-2xl bg-my-purple md:p-10 see-my-work-btn p-5">
            <a href="#projects">SEE MY WORK</a>
          </button>
        </div>

        <div className="z-10 md:pr-0 pr-3">
          <div className="flex gap-8 md:text-2xl md:p-10 icons-home-div z-10 p-5 float-end">
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
      </div>
    </section>
  );
}
