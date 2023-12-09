import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProdcutsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotosPage from "./pages/PhotosPage실습";
import PhotosDetailPage from "./pages/PhotosDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Routes, Route 감싸야 함. */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/photos/:id" element={<PhotosDetailPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
