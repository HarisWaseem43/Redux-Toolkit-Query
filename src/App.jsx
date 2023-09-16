import "./App.css";
import { Routes, Route } from "react-router";
import CommentsCards from "./components/CommentCards";
import PostCards from "./components/PostCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/postCard" element={<PostCards />} />
        <Route path="/commentCard" element={<CommentsCards />} />
      </Routes>
    </div>
  );
}

export default App;
