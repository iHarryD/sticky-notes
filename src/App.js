import "./css/generic.css";
import "./css/utilities.css";
import "./css/variables.css";
import "./css/typography.css";

import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
