// eslint-disable-next-line react/prop-types, no-unused-vars
const Biodiri = ({ state, setModalOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${
        state ? "" : "hidden"
      } z-20 bg-[rgba(0,0,0,0.9)]`}
    >
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border">
        <div className="flex justify-end pr-2 pt-2">
          <button
            className="bg-gray-700 hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-700 p-2 rounded-full"
            onClick={() => setModalOpen(!state)}
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4 ">
          <div className="text-gray-500 flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="flex-shrink-0 h-16 w-16 "
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>
          <p className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
            Bio Data Peserta
          </p>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-400 font-semibold">
              Nama
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              Reza Ghiyats Fikri
            </p>
            <p className="text-gray-700 dark:text-gray-400 font-semibold mt-2">
              Asal
            </p>
            <p className="text-gray-700 dark:text-gray-400">Mojokerto</p>
            <p className="text-gray-700 dark:text-gray-400 font-semibold mt-2">
              Sekolah
            </p>
            <p className="text-gray-700 dark:text-gray-400">SMKN 2 Mojokerto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodiri;
