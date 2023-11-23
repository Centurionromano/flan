import React from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Comen from "../components/Comen";
import Coments from "../components/Coments";

//Importar componentes

const Politicas = () => {
  return (
    <div className="App">
      <Header />
      <Comen />

      <div className="titleContainer"></div>
      <div className="center">

      <Coments />

        <div className="clearfix"></div>
      </div>{" "}
      {/* End div center*/}
      <Footer />
    </div>
  );
};

export default Politicas;
