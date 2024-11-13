import "./App.css";
import {Routes, Route } from "react-router-dom";
import PageShelf from "./components/PageShelf";
import PageSearch from "./components/PageSearch";
import Login from "./components/Login";

function App() {

  return (
      <Routes>
        <Route path="/shelf" element={<PageShelf />} />
        <Route path="/search" element={<PageSearch />} />
        <Route path="/" element={<Login />} />

      </Routes>
  );
}

export default App;
