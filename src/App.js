import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Card from "./Card";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="App">
        <div className="particles">
          <ParticleBackground />
        </div>
        <Navbar />
        <Home />
        <Card />
        <Footer />
      </div>
    </div>
  );
};

export default App;
