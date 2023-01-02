import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LocationPage } from "./pages/LocationPage";
import { Footer } from "./components/FooterSection/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
