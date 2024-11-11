import "./App.css";
import {Routes, Route } from "react-router-dom";
import PageShelf from "./components/PageShelf";
import PageSearch from "./components/PageSearch";

function App() {

  return (
      <Routes>
        <Route path="/" element={<PageShelf />} />
        <Route path="/search" element={<PageSearch />} />
      </Routes>
  );
}

export default App;
