import "./css/generic.css";
import "./css/utilities.css";
import "./css/variables.css";
import "./css/typography.css";

import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
