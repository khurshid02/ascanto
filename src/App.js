import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Containers/Header";
import Section from "./Containers/Section.js";
import Footer from "./Containers/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
