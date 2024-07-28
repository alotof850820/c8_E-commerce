import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Product from "@/pages/product";

const RouterView = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RouterView;
