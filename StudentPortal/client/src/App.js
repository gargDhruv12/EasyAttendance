import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import TeamFormation from './pages/TeamFormation';
import Chat from './pages/Chat';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile userId={1} />} />
        <Route path="/team" element={<TeamFormation />} />
        <Route path="/chat" element={<Chat teamId={1} />} />
      </Routes>
    </Router>
  );
};

export default App;