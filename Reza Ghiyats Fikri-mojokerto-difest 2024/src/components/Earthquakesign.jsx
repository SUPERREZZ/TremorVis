import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const EarthquakeSigns = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: false, // loop
    });
  }, []);

  return (
    <div
      id="signs"
      className="flex flex-col justify-center items-center min-h-screen px-5 bg-gradient-to-b from-black via-transparent to-black pt-20"
    >
      <h2
        className="text-white text-3xl font-semibold mb-10 md:text-5xl"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Earthquake Signs
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-semibold mb-4">Sign 1</h2>
          <p className="text-lg">Sudden shaking or trembling of the ground.</p>
        </div>
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Sign 2</h2>
          <p className="text-lg">
            Loud rumbling or roaring sounds that precede the shaking.
          </p>
        </div>
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Sign 3</h2>
          <p className="text-lg">
            Sudden tilting or swaying of buildings and other structures.
          </p>
        </div>
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-up-right"
          data-aos-delay="600"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Sign 4</h2>
          <p className="text-lg">
            Unusual animal behavior, such as dogs barking incessantly or birds
            fleeing the area.
          </p>
        </div>
        <div
          className="card bg-transparent col-span-2 md:col-span-1 border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Sign 5</h2>
          <p className="text-lg">
            Earthquake lights or flashes of light in the sky near the horizon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeSigns;
