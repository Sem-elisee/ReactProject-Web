import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/main.css"
import Main from "./views/Main";
import Contact from "./Contact/Contact";
import Pages from "./Pages/Pages";
import Features from "./Features/Features";
import Blog from "./Blog/Blog";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Pages" element={<Pages/>} />
          <Route path="/Features" element={<Features/>} />
          <Route path="/Blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
