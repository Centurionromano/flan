import React from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PoliVentaPriv from "../components/PoliVentaPriv";
import Poli from "../components/Poli";

//Importar componentes

const Politicas = () => {
  return (
    <div className="App">
      <Header />
      <Poli />
      <div className="titleContainer">
       
      </div>
      <div className="center">
        <PoliVentaPriv />

        <div className="clearfix"></div>
      </div>{" "}
      {/* End div center*/}
      <Footer />
    </div>
  );
};

export default Politicas;
