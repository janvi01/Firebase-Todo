import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() =>
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser)
        setUser(currentUser);
      else
        setUser(null);
    }), []);
  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" exact element={<Dashboard user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register user={user} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
