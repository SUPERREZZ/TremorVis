import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const EarthquakeTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi 
      once: false, // loop
    });
  }, []);

  return (
    <div
      id="tips"
      className="flex flex-col justify-center items-center min-h-screen px-5 bg-gradient-to-b from-black via-transparent to-black "
    >
      <h2
        className="text-white text-3xl font-semibold mb-10 md:text-5xl"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Earth Quakes Tips
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-semibold mb-4">Step 1</h2>
          <p className="text-lg">
            Stay calm and find shelter under a table or sturdy object.
          </p>
        </div>
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Step 2</h2>
          <p className="text-lg">
            Stay away from windows, mirrors, or other fragile objects.
          </p>
        </div>
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Step 3</h2>
          <p className="text-lg">
            If outside, avoid buildings, power lines, and trees.
          </p>
        </div>
        <div
          className="card bg-transparent border-b rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-up-right"
          data-aos-delay="600"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Step 4</h2>
          <p className="text-lg">
            Use your hands to protect your head and neck from falling objects.
          </p>
        </div>
        <div
          className="card bg-transparent border-b col-span-2 md:col-span-1 rounded p-2 text-white shadow-red md:p-8"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-2xl font-semibold mb-4">Step 5</h2>
          <p className="text-lg">
            After the earthquake, be sure to check for damage and follow
            established evacuation guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeTips;
