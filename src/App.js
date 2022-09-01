import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePages from "./Pages/HomePages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
