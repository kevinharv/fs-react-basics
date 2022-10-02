import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data =  [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
];

function Animals() {
  return (
    <div>
      <ul>
        { data && data.map(({id, name}) => {
          return <li key={id}>{name}</li>
        })}
      </ul>
    </div>
  );
}


function Butt() {
  const [qty, setQty] = useState(0);
  function handleClick(event) {
    setQty(qty + Math.floor(Math.random() * 10));
  }

  return (
    <>
      <button onClick={handleClick}>{qty}</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Animals />

        <Butt />

      </header>
    </div>
  );
}

export default App;
