import { useEffect, useState } from 'react';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import axios from 'axios';

export default function Main() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get('/projectsInfo.json')
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Home />
      <Projects info={info} />
    </div>
  );
}
