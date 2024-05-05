import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import jsonData from "../../csvjson.json";

/**
 * Komponen untuk menampilkan peta gempa bumi.
 * Memanfaatkan Leaflet.js untuk menggambar peta dan menampilkan marka gempa bumi.
 */
// eslint-disable-next-line react/prop-types
const EarthquakeMap = ({ earthdata }) => {
  const [data, setData] = useState([]); // State untuk menyimpan data gempa bumi

  useEffect(() => {
    /**
     * Memuat data gempa bumi saat komponen dimuat.
     * Memperbarui data setiap 1 detik.
     */
    const fetchData = async () => {
      const sortedData = earthdata || jsonData;
      setData(sortedData);
    };

    fetchData(); // Memanggil fungsi fetchData saat komponen pertama kali dimuat

    // Memanggil ulang fetchData setiap 1 detik
    const intervalId = setInterval(fetchData, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(intervalId);
  }, [earthdata]);

  useEffect(() => {
    const map = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    const groupedQuakes = groupQuakesByLocation(data);

    Object.values(groupedQuakes).forEach((quakes) => {
      const largestQuake = findLargestMagnitudeQuake(quakes);
      const { Latitude, Longitude } = largestQuake;
      const radius = getRadius(largestQuake.Magnitude);

      const quakeMarker = L.circleMarker([Latitude, Longitude], {
        radius: radius,
        color: getColor(largestQuake.Magnitude),
        fillOpacity: 0.7,
      }).addTo(map);

      quakeMarker.bindPopup(
        `<b>Magnitude:</b> ${largestQuake.Magnitude}<br/><b>Country:</b> ${largestQuake.Country}`
      );

      quakeMarker.on("mouseover", () => {
        const sortedQuakes = quakes.sort((a, b) => b.Magnitude - a.Magnitude);
        const quakeList = sortedQuakes
          .map(
            (quake) =>
              `<b>Magnitude:</b> ${quake.Magnitude}<br/><b>Country:</b> ${quake.Country}`
          )
          .join("<br/><br/>");
        quakeMarker.bindPopup(quakeList).openPopup();
      });

      quakeMarker.on("mouseout", () => {
        quakeMarker.bindPopup(
          `<b>Magnitude:</b> ${largestQuake.Magnitude}<br/><b>Country:</b> ${largestQuake.Country}`
        );
      });
    });

    return () => {
      map.remove();
    };
  }, [data]); // Menjalankan efek saat data berubah

  /**
   * Fungsi untuk mengelompokkan gempa bumi berdasarkan lokasi (latitude dan longitude).
   * @param {Array} quakes - Data gempa bumi
   * @returns {Object} - Objek yang memuat gempa bumi yang dikelompokkan berdasarkan lokasi
   */
  const groupQuakesByLocation = (quakes) => {
    return quakes.reduce((acc, quake) => {
      const key = `${quake.Latitude}_${quake.Longitude}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(quake);
      return acc;
    }, {});
  };

  /**
   * Fungsi untuk mencari gempa bumi dengan magnitudo terbesar di setiap lokasi.
   * @param {Array} quakes - Data gempa bumi yang dikelompokkan berdasarkan lokasi
   * @returns {Object} - Gempa bumi dengan magnitudo terbesar di setiap lokasi
   */
  const findLargestMagnitudeQuake = (quakes) => {
    return quakes.reduce((largestQuake, currentQuake) => {
      return currentQuake.Magnitude > largestQuake.Magnitude
        ? currentQuake
        : largestQuake;
    }, quakes[0]);
  };

  /**
   * Fungsi untuk menentukan ukuran radius berdasarkan magnitudo.
   * @param {number} magnitude - Magnitudo gempa bumi
   * @returns {number} - Ukuran radius untuk marka gempa bumi
   */
  const getRadius = (magnitude) => {
    if (magnitude < 2) {
      return 0.8;
    } else if (magnitude < 3) {
      return 1.7;
    } else if (magnitude < 4) {
      return 3.5;
    } else if (magnitude < 5) {
      return 5;
    } else if (magnitude < 6) {
      return 10;
    } else {
      return 15;
    }
  };

  /**
   * Fungsi untuk menentukan warna berdasarkan magnitudo.
   * @param {number} magnitude - Magnitudo gempa bumi
   * @returns {string} - Warna yang sesuai dengan magnitudo gempa bumi
   */
  const getColor = (magnitude) => {
    if (magnitude < 2) {
      return "green";
    } else if (magnitude < 3) {
      return "yellow";
    } else if (magnitude < 4) {
      return "orange";
    } else if (magnitude < 5) {
      return "red";
    } else if (magnitude < 6) {
      return "rgb(65, 11, 20)";
    } else {
      return "black";
    }
  };

  return <div id="map" className="rounded-lg w-full h-[350px]"></div>;
};

export default EarthquakeMap;
