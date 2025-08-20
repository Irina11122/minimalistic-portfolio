import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../public/projectsInfo.json';
export default function Projects() {
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setInfo(projectsData);
    setFilteredInfo(projectsData);
  }, []);
  const filterData = (category) => {
    if (category === 'All') {
      setFilteredInfo(info);
    } else {
      const filtered = info.filter((f) => f.category.includes(category));
      setFilteredInfo(filtered);
    }
  };
  return (
    <section id="projects" className="z-20">
      <h1 className="md:text-4xl uppercase">See my projects</h1>
      <button
        onClick={() => filterData('All')}
        className="float-end bg-gray-purple text-gray-100 hover:scale-105 transition-all p-5 px-10 border-black border"
      >
        All
      </button>

      <div className="flex justify-evenly md:flex-row flex-col mb-20 mt-20 z-20">
        <button
          onClick={() => filterData('html')}
          className="border border-black p-10 bg-dark-purple"
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            filterData('js');
            filterData('react');
          }}
          className="border border-black p-10 bg-dark-purple"
        >
          JavaScript & REACT
        </button>
        <button
          onClick={() => filterData('figma')}
          className="border border-black p-10 bg-dark-purple"
        >
          FIGMA
        </button>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap gap-10 p-10">
        {filteredInfo.map((info, index) => {
          return (
            <div key={index} className="md:w-w-30% md:h-72 bg-red-100 relative">
              <h1> {info.title} </h1>{' '}
              <div className="absolute bg-black/50 h-44 top-0"></div>
              <img
                src={info.image}
                alt={info.title}
                className="absolute top-0 left-0 h-44"
              />
              <button onClick={() => navigate(`/info/${info.id}`)}>
                See more
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
