import React from 'react'
import App from './App';
import { Link, Route, Routes } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/1`}>Edit</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </div>
  );
}

export default Home