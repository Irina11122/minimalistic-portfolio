import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProjectsInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('../../public/projectsInfo.json').then((res) => {
      const data = res.data;
      const found = data.find((g) => g.id === parseInt(id));
      setInfo(found);
    });
  }, [id]);

  if (!info) return <div>Loading...</div>;
  return (
    <div className={info.background}>
      <img src={info.image} alt={info.title} />
      <p className="pt-40">{info.title}</p>

      <p>{info.tech}</p>
      <p>{info.description}</p>
      <a href={info.live}>Live Demo</a>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}
