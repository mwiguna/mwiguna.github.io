import { Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import Kontak from './Kontak';
import RiwayatPendidikan from './RiwayatPendidikan';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Link to="/" className="pr-1">Home</Link>
      <Link to="/kontak" className="px-1">Kontak</Link>
      <Link to="/riwayat_pendidikan" className="px-1">RiwayatPendidikan</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/riwayat_pendidikan" element={<RiwayatPendidikan />} />
      </Routes>

    </div>
  );
}

export default App;
