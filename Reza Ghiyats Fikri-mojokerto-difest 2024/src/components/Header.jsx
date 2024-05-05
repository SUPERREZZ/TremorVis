import "../custom.css"; // Impor file CSS kustom

// Komponen Header
const Header = () => {
  // Fungsi untuk menggulir halaman ke bagian tertentu
  const scrollToSection = () => {
    // Dapatkan elemen dengan id "quakesData"
    const section = document.getElementById("quakesData");
    if (section) {
      // Gulir halaman ke elemen tersebut dengan efek smooth
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="header" 
      className="pt-10 flex flex-col items-center justify-center bg-gradient-to-b from-black via-transparent to-black h-full" 
    >
      <h1 className="text-5xl font-bold text-custom text-center font-mono ">
        Earthquake Data Visualization
      </h1>
      <h5 className="text-2xl text-gray-300 text-center font-mono mt-7">
        Explore earthquake activity around the world
      </h5>
      {/* Tombol untuk menggulir ke bagian "quakesData" dengan efek smooth */}
      <button
        onClick={scrollToSection} // Panggil fungsi scrollToSection saat tombol diklik
        className="animate-bounce -z-1 mx-auto mt-20 text-white border-2 outline-2 flex items-center justify-center rounded-full p-1" // Kelas CSS untuk styling tombol
      >
        {/* Ikona panah ke bawah */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-down"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Header; // Ekspor komponen Header untuk digunakan di tempat lain
