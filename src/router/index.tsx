import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";

const RouterView = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RouterView;
