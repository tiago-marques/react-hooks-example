import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';

export default function App() {

  let [name, setName] = useState("tiago-marques")
  let [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Count is " + count;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Hooks Example
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hooks with {name}!
          </a>
        <p>Input example</p>
        <Input value={name} onChange={setName} />
        <p>Count example</p>
        {count}
        <div>
          <button onClick={() => setCount(count + 1)}>More +</button>
          <button onClick={() => setCount(count - 1)}>Less -</button>
        </div>
      </header>
    </div>
  )
}