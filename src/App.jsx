import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner/>
      <Products/>
    </div>
  );
}

export default App;
