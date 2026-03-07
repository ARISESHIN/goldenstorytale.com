import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { StoriesPage } from "./components/StoriesPage";
import { VideosPage } from "./components/VideosPage";
import { ProductsPage } from "./components/ProductsPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { AboutPage } from "./components/AboutPage";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
