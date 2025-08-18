import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Projects({ info }) {
  const navigate = useNavigate();

  return (
    <section id="projects">
      <h1>See my projects</h1>
      <button onClick={() => filterData('All')}>All</button>
      {/* figma css js buttons */}
      <div className="flex justify-evenly mb-20">
        <button onClick={() => filterData('html')}>HTML & CSS</button>
        <button onClick={() => filterData('js')}>JavaScript & REACT</button>
        <button onClick={() => filterData('figma')}>FIGMA</button>
      </div>
      <div className="flex flex-wrap gap-10 p-10">
        {info.map((info, index) => {
          return (
            <div key={index} className="w-52 h-52">
              <h1> {info.title} </h1>
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
