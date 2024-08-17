import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
