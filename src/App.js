import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Route, Routes, useParams } from 'react-router-dom';

function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    console.log(response.data);
    setName(response.data.name);
    setImage(response.data.image);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(name)}

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
