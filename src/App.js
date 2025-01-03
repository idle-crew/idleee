import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/main/page';
import Login from './pages/login/page';
import PostDetail from './pages/post/page';
import Edit from './pages/edit/page';
import Upload from './pages/upload/page';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
