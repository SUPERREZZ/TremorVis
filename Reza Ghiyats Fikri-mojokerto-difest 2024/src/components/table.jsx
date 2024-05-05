import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import jsonData from "../../csvjson.json";
import EarthquakeMap from "./EarthquakeMap";

// Komponen tabel gempa bumi
export const EarthquakeTable = () => {
  // State untuk menyimpan data gempa bumi dari file JSON
  const [earthquakeData, setEarthquakeData] = useState(jsonData);
  // State untuk menyimpan 5 gempa bumi terbesar
  const [largestEarthquakes, setLargestEarthquakes] = useState([]);
  // State untuk indeks awal data yang akan ditampilkan dalam tabel
  const [startIndex, setStartIndex] = useState(0);
  // State untuk menangani kesalahan
  const [error, setError] = useState(null);
  // State untuk menampilkan nomor tabel saat ini
  const [tableCount, setTableCount] = useState(1);
  // State untuk menyimpan kata kunci pencarian
  const [searchTerm, setSearchTerm] = useState("");
  // State untuk menyimpan data yang sudah diurutkan
  const [sortedData, setSortedData] = useState([]);
  // State untuk menentukan urutan penyortiran data
  const [sortOrder, setSortOrder] = useState("desc");

  // Efek untuk mengurutkan data saat sortOrder berubah
  useEffect(() => {
    const sortedData = jsonData.sort((a, b) =>
      sortOrder === "asc"
        ? a.Magnitude - b.Magnitude
        : b.Magnitude - a.Magnitude
    );
    setSortedData(sortedData);
  }, [sortOrder]);

  // Efek untuk menampilkan 5 gempa bumi terbesar saat sortedData, startIndex, searchTerm, atau sortOrder berubah
  useEffect(() => {
    try {
      // Filter data berdasarkan kata kunci pencarian
      const filteredData = searchTerm
        ? sortedData.filter((quake) =>
            quake.Country.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : sortedData;

      // Ambil 5 gempa bumi terbesar sesuai dengan indeks awal
      const largestQuakes = filteredData.slice(startIndex, startIndex + 5);

      // Simpan gempa bumi terbesar ke dalam state
      setLargestEarthquakes(largestQuakes);

      // Atur data yang akan ditampilkan dalam tabel
      setEarthquakeData(searchTerm.length > 0 ? largestQuakes : jsonData);
    } catch (error) {
      setError(error.message);
    }
  }, [startIndex, searchTerm, sortedData, sortOrder]); // Tambahkan sortOrder ke daftar ketergantungan

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (ms)
      once: false, // Animasi akan diputar ulang setiap kali pengguna memasuki area elemen
    });
  }, []);

  // Fungsi untuk menampilkan halaman tabel berikutnya
  const showNext = () => {
    setStartIndex(startIndex + 5);
    setTableCount(tableCount + 1);
  };

  // Fungsi untuk menampilkan halaman tabel sebelumnya
  const showPrevious = () => {
    if (startIndex >= 5) {
      setStartIndex(startIndex - 5);
      setTableCount(tableCount - 1);
    }
  };

  // Fungsi untuk menangani perubahan kata kunci pencarian
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setStartIndex(0);
    setTableCount(1);
    setEarthquakeData(sortedData.slice(0, 5));
  };

  // Fungsi untuk menangani perubahan urutan penyortiran data
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Tampilkan pesan kesalahan jika terjadi kesalahan
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render tabel gempa bumi
  return (
    <div id="quakesData" className="bg-black shadow-lg py-10">
      <h1
        className="text-5xl font-semibold text-center py-10 text-white"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        EarthQuakes
      </h1>
      <div className="flex flex-col-reverse md:flex-row py-10 px-5 md:px-10 gap-5 md:gap-14 items-center justify-around">
        {/* Bagian untuk tabel */}
        <div className="w-full md:w-1/2" data-aos="fade-up-right">
          <div className="container mx-auto w-full">
            {/* Pencarian dan penyortiran */}
            <div className="flex justify-center gap-2 mb-4 flex-col md:flex-row">
              {/* Input pencarian */}
              <input
                type="text"
                placeholder="Search by Country..."
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 border rounded text-black"
              />
              {/* Dropdown untuk memilih urutan penyortiran */}
              <select
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="p-2 border rounded text-black"
              >
                <option value="desc">Sort by Magnitude (Desc)</option>
                <option value="asc">Sort by Magnitude (Asc)</option>
              </select>
            </div>
            {/* Informasi tentang jumlah tabel */}
            <p className="text-center text-gray-600 mt-2">
              <span className="font-bold">{tableCount}</span> For{" "}
              <span className="font-bold">
                {Math.ceil(jsonData.length / 5)} Tables
              </span>
            </p>
            {/* Tabel gempa bumi terbesar */}
            <div className="overflow-x-auto">
              <table
                className="table-auto mx-auto m-4 mt-4 text-sm rounded-lg w-full"
                style={{ tableLayout: "fixed" }}
              >
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-2 border whitespace-nowrap">Magnitude</th>
                    <th className="p-2 border whitespace-nowrap">Place</th>
                    <th className="p-2 border whitespace-nowrap">Country</th>
                    <th className="p-2 border whitespace-nowrap">Continent</th>
                  </tr>
                </thead>
                <tbody>
                  {largestEarthquakes.map((quake, index) => (
                    // Menampilkan data gempa bumi dalam tabel
                    <tr key={index} className="text-white">
                      <td className="border px-2 py-2 whitespace-wrap ">
                        {quake.Magnitude}
                      </td>
                      <td className="border px-2 py-2 whitespace-wrap">
                        {quake.Place}
                      </td>
                      <td className="border px-2 py-2 whitespace-wrap">
                        {quake.Country}
                      </td>
                      <td className="border px-2 py-2 whitespace-wrap">
                        {quake.Continent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Tombol navigasi untuk halaman tabel */}
            <div className="flex justify-center mt-4">
              <button
                onClick={showPrevious}
                className={`${
                  startIndex < 5 ? "invisible" : ""
                } bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-4 rounded`}
              >
                Previous
              </button>
              <button
                onClick={showNext}
                className={`${
                  startIndex + 5 >= jsonData.length ? "invisible" : ""
                } bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Bagian untuk peta */}
        <div className="w-full md:w-1/2 h-[400px]" data-aos="fade-up-left">
          <EarthquakeMap earthdata={earthquakeData} />
        </div>
      </div>
    </div>
  );
};

export default EarthquakeTable;
