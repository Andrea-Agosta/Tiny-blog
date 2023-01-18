import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import Article from './layout/Article';
import Footer from './components/Footer';
import { AuthorPosts } from './layout/AuthorPosts';
import AuthorList from './layout/AuthorList';

function App() {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen p-3 pt-20 pb-0 md:pb-0 md:p-10 lg:pb-0 md:pt-20 lg:p-16 lg:pt-28 mb-0'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
          <Route path="/authors" element={<AuthorList />}></Route>
          <Route path="/authors/:id/posts" element={<AuthorPosts />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
