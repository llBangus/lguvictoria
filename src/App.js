import './App.css';
import Home from "./routes/Home"
import Offices from "./routes/Offices"
import JobOffers from "./routes/Job_Offers"
import AboutUs from "./routes/About_Us"
import Entertainments from "./routes/Entertainments"

import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/Job-Offers" element={<JobOffers />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Entertainments" element={<Entertainments />} />
      </Routes>
    </>
  );
}

export default App;