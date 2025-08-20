import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoCaretForwardOutline } from 'react-icons/io5';

export default function ProjectsInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get('/projectsInfo.json').then((res) => {
      const data = res.data;
      const found = data.find((g) => g.id === parseInt(id));
      setInfo(found);
    });
  }, [id]);

  if (!info) return <div>Loading...</div>;
  return (
    <div
      id="infopage"
      className=""
      style={{ background: info.background, color: info.color }}
    >
      <header className="flex justify-between bg-white text-gray-600 py-5 px-2 md:mb-20">
        <h1>{info.title}</h1>
        <button>
          <Link to="/">GO HOME</Link>
        </button>
      </header>
      <div className="flex flex-col">
        <div className="flex gap-9 px-5">
          <div className="md:w-w-50% ">
            <p className="text-2xl mb-4">{info.description}</p>
            <p className="text-2xl mb-7">
              Role: <span className="text-neon-purple">{info.role}</span>
            </p>
            <ul className="text-2xl">
              {info.features.map((item, i) => (
                <li key={i} className="flex mb-3">
                  {' '}
                  <IoCaretForwardOutline /> {item}
                </li>
              ))}
            </ul>{' '}
            <div className="flex flex-wrap gap-20 ">
              {info.tech.map((item, i) => {
                return (
                  <button
                    key={i}
                    style={{ background: info.secondarycolor }}
                    className="p-10 rounded hover:animate-pulse md:w-w-25%"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="md:w-w-50% flex flex-col items-center h-screen justify-start">
            <img src={info.image} alt={info.title} className="w-full rounded mb-10" />
            <div>
              {info.links.map((link, i) => {
                return (
                  <a
                    key={i}
                    href={link.url}
                    className={`px-4 py-2 rounded-full ml-4 text-2xl shadow-md hover:scale-105 transition ${
                      link.type === 'live-demo'
                        ? 'bg-gray-800 text-white'
                        : 'bg-pink-500 text-white'
                    }`}
                  >
                    {link.type}
                  </a>
                );
              })}
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
