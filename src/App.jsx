import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LivePage from "./Pages/LivePage";
import AboutPage from "./Pages/AboutPage";
import TutorialPage from "./Pages/TutorialPage";
import DetailProductPage from "./Pages/DetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-product/:id" element={<DetailProductPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
      </Routes>
    </BrowserRouter>
  );
}
