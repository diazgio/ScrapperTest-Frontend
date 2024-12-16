import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import ProductPage from "./pages/product/productPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductPage />} />
  </Routes>
  </BrowserRouter>
);
}

export default App;
