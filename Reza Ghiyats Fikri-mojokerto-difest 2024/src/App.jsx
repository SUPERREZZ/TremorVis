import 'tailwindcss/tailwind.css';
import EarthquakeTips from "./components/EarthquakeTips.jsx";
import EarthquakeSigns from "./components/Earthquakesign.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Biodiri from "./components/biodiri.jsx";
import EarthquakeTable from "./components/table.jsx";
import "./custom.css";
import { useState } from "react";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-0 bg-black flex flex-col">
      <Navbar />
      <Biodiri state={modalOpen} setModalOpen={setModalOpen} />
      <div className="h-screen w-screen bg-custom">
        <Header />
      </div>
      <div className="min-h-screen w-screen bg-custom">
        <EarthquakeSigns />
      </div>
      <div className="min-h-screen w-screen flex-grow">
        <EarthquakeTable />
      </div>
      <div className="min-h-screen w-screen bg-custom">
        <EarthquakeTips />
      </div>
      <div className="bg-black w-screen">
      <Footer state={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default App;
