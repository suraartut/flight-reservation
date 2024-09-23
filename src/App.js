import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyFlightsPage from "./pages/MyFlightsPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myflights" element={<MyFlightsPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
