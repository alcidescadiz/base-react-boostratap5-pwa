import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/Search";
import ShowShelf from "./components/ShowShelf";
import WatchList from "./components/WatchList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowShelf />} />
        
        <Route path="/my-watch-list" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;