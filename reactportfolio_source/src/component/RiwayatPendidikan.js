import { useParams } from "react-router-dom";

const RiwayatPendidikan = () => {
  const { id } = useParams();

  return ( 
      <div>
         Halaman Riwayat Pendidikan {id}
      </div>
  );
}

export default RiwayatPendidikan;
