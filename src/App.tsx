import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import Article from './layout/Article';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
