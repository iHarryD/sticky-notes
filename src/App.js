import { Routes, Route } from "react-router-dom";

import "./css/generic.css";
import "./css/utilities.css";
import "./css/variables.css";
import "./css/typography.css";

import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";
import AddTodosPage from "./components/add_todos_page/AddTodosPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-todos" element={<AddTodosPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
