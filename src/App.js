import Navbar from "../src/js/Navbar";
import Travel from "./js/Travel";
import Destination from "./js/Destination";
import Featured from "./js/Featured";
import Feedback from "./js/Feedback";
import Artcile from "./js/Artcile";
import Footer from "./js/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Travel />
      <Destination />
      <Featured />
      <Feedback />
      <Artcile />
      <Footer />
    </div>
  );
}

export default App;
