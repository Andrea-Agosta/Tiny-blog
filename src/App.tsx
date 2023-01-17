import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import Article from './layout/Article';
import Footer from './components/Footer';
import { AuthorPosts } from './layout/AuthorPosts';

function App() {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
          <Route path="/author/:id/posts" element={<AuthorPosts />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
