import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Relatorio from './pages/Relatorio'
import AnimaisFiltro from './pages/AnimaisFiltro'
import Ongs from './pages/Ongs'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Relatorio" element={<Relatorio />} />
        <Route path="/Ongs" element={<Ongs />} />
        <Route path="/AnimaisFiltro" element={<AnimaisFiltro />} />
        <Route path="/teste" element={<SessionPet />} />
      </Routes>
    </>
  );
}

export default App
