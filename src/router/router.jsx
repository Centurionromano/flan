import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Politicas from "../pages/Politicas";
import Comentarios from "../pages/Comentarios";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/politicas" element={<Politicas />} />
        <Route exact path="/comentarios" element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;