import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";

import { HomePage } from "./pages/HomePage";
import { LocationPage } from "./pages/LocationPage";
import { Footer } from "./components/FooterSection/Footer";

function App() {
  return (
    <div className={style.page}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
