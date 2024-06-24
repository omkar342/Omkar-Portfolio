import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Card from "./Card";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const App = () => {
  return (
    <div>
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
