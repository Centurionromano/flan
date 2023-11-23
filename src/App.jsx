import "./assets/css/App.css";

//Importar componentes

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";
import Flan from "./components/Flan";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <SeccionPruebas />

        <Sidebar />
        <div className="clearfix"></div>
      </div>{" "}
      {/* End div center*/}
      <Footer />
    </div>
  );
}

export default App;
