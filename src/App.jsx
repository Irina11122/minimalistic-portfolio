import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './fonts/Fonts.css';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Main from './pages/Main';
import ProjectsInfo from './pages/ProjectsInfo';

export default function App() {
  return (
    <div className="comfortaa-700">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info/:id" element={<ProjectsInfo />} />
      </Routes>
    </div>
  );
}
