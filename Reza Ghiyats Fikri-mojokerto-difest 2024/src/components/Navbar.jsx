import { useState } from "react";

// Komponen Navbar
const Navbar = () => {
  // State untuk mengontrol status terbuka atau tertutupnya menu navigasi
  const [isOpen, setIsOpen] = useState(false);
  // State untuk melacak link yang aktif
  const [activeLink, setActiveLink] = useState(null);

  // Fungsi untuk menoggle menu navigasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menangani klik pada link
  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsOpen(false);
  };

  return (
    // Komponen Navbar
    <header className="flex flex-wrap sm:justify-center sm:flex-nowrap w-full  text-sm py-4 bg-black fixed top-0 z-10">
      <nav
        className={`max-w-[85rem] w-full px-4 sm:px-20  sm:flex sm:items-center sm:justify-between`}
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Logo TremorVis */}
          <a
            className="flex-none text-xl font-semibold  text-white"
            href="#"
          >
            TremorVis
          </a>
          {/* Tombol untuk menu mobile */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-400 bg-black text-gray-400 shadow-sm hover:bg-gray-400 hover:text-black disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {/* Icon untuk tombol menu */}
              <svg
                className={
                  !isOpen
                    ? "hs-collapse-open:block hidden flex-shrink-0 size-4"
                    : "hs-collapse-open:hidden flex-shrink-0 size-4"
                }
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <svg
                className={
                  !isOpen
                    ? "hs-collapse-open:hidden flex-shrink-0 size-4 transform rotate-180"
                    : "hs-collapse-open:block hidden flex-shrink-0 size-4"
                }
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {/* Navigasi menu */}
        <div
          id="navbar-alignment"
          className={
            isOpen
              ? "hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
              : "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          }
        >
          <div className="flex flex-col justify-end gap-10 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            {/* Daftar link navigasi */}
            <a
              className={`font-medium ${
                activeLink === 0
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              }`}
              href="#header"
              aria-current="page"
              onClick={() => handleLinkClick(0)}
            >
              Home
            </a>
            <a
              className={`font-medium ${
                activeLink === 1
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              }`}
              href="#signs"
              onClick={() => handleLinkClick(1)}
            >
              Signs
            </a>
            <a
              className={`font-medium ${
                activeLink === 2
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              }`}
              href="#quakesData"
              onClick={() => handleLinkClick(2)}
            >
              Quakes Data
            </a>
            <a
              className={`font-medium ${
                activeLink === 3
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              }`}
              href="#tips"
              onClick={() => handleLinkClick(3)}
            >
              Tips
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
