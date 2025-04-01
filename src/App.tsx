import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer/Footer";
import OurSugestion from "./pages/OurSugestion";
import Items from "./pages/Vehicles";
import AddVehicleForm from "./pages/AddVehicleForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Items />} />
        <Route path="/oursugestion" element={<OurSugestion />} />
        <Route path="/addvehicle" element={<AddVehicleForm />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
