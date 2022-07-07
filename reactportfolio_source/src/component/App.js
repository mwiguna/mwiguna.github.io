import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import Kontak from './Kontak';
import RiwayatPendidikan from './RiwayatPendidikan';
import '../App.css';

function App() {
  const base_url = "";

  return (
    <div className="App">
      <Link to={base_url + "/"} className="pr-1">Home</Link>
      <Link to={base_url + "/kontak"} className="px-1">Kontak</Link>
      <Link to={base_url + "/riwayat_pendidikan/1"} className="px-1">RiwayatPendidikan 1</Link>
      <Link to={base_url + "/riwayat_pendidikan/2"} className="px-1">RiwayatPendidikan 2</Link>

      <Routes> 
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path={base_url + "/"} element={<HomePage />} />
        <Route path={base_url + "/kontak"} element={<Kontak />} />
        <Route path={base_url + "/riwayat_pendidikan/:id"} element={<RiwayatPendidikan />} />
      </Routes>

    </div>
  );
}

export default App;
