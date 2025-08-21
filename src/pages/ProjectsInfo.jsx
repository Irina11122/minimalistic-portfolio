import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoCaretForwardOutline } from "react-icons/io5";

export default function ProjectsInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get("/projectsInfo.json").then((res) => {
      const data = res.data;
      const found = data.find((g) => g.id === parseInt(id));
      setInfo(found);
    });
  }, [id]);

  if (!info)
    return (
      <div className="h-screen w-screen bg-dark-purple dark:bg-gray-900 text-gray-100 flex justify-center items-center">
        Loading...
      </div>
    );
  return (
    <div
      id="infopage"
      className=""
      style={{ background: info.background, color: info.color }}
    >
      <header className="flex fixed w-full  justify-between bg-black/70 text-gray-100 py-5 px-2 md:mb-20">
        <h1>{info.title}</h1>
        <button>
          <Link to="/">GO HOME</Link>
        </button>
      </header>
      <div className="flex flex-col pt-24">
        <div className="flex md:flex-row flex-col-reverse md:gap-9 px-5">
          <div className="md:w-w-50% w-full projects-info-page">
            <p className="md:text-2xl mb-4">{info.description}</p>
            <p className="text-2xl mb-7">
              Role: <span className="text-neon-purple">{info.role}</span>
            </p>
            <ul className="md:text-2xl">
              {info.features.map((item, i) => (
                <li key={i} className="flex mb-3">
                  {" "}
                  <IoCaretForwardOutline /> {item}
                </li>
              ))}
            </ul>{" "}
            <div className="flex flex-wrap md:gap-20 gap-8 md:my-0 my-20 justify-center">
              {info.tech.map((item, i) => {
                return (
                  <button
                    key={i}
                    style={{ background: info.secondarycolor }}
                    className="md:p-10 p-2  hover:animate-pulse md:w-w-25% px-4 py-2 rounded-full"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="md:w-w-50% flex flex-col items-center md:h-screen mb-20 justify-start w-full">
            <img
              src={info.image}
              alt={info.title}
              className="w-full rounded mb-10"
            />
            <div className="flex items-center">
              {info.links.map((link, i) => {
                return (
                  <a
                    key={i}
                    href={link.url}
                    className={`px-4 py-2 rounded-full ml-2 md:text-2xl shadow-md hover:scale-105 transition ${
                      link.type === "live-demo"
                        ? "bg-gray-800 text-white"
                        : "bg-pink-500 text-white"
                    }`}
                  >
                    {link.type}
                  </a>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
