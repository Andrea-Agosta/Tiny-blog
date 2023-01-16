import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
