import React from 'react'
import App from './App';
import { Link, Route, Routes } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='react-deployment/1'>Edit</Link>
      <Routes>
        <Route path="/react-deployment" element={<Home />} />
        <Route path="/react-deployment/:id" element={<App />} />
      </Routes>
    </div>
  );
}

export default Home