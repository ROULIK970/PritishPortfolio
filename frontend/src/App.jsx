import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import RefreshHandler from "./RefreshHandler.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const PrivateRouter = ({element}) =>{
    return isAuthenticated? element : <Navigate to="/chat/login"/>
  }
  return (
    <div>
      <Router>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />

            <Route path="chat" element={<PrivateRouter element={<Chat />} />} />
            <Route path="chat/login" element={<Login />} />
            <Route path="chat/signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
