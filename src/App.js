import "./App.scss";
import Contact from "./companents/Contact";
import Footer from "./companents/Footer";
import Header from "./companents/Header";
import Hero from "./companents/Hero";
import Join from "./companents/Join";
import Number from "./companents/Number";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Contact/>
      <Number/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
