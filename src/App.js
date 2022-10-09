import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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

function DisplayCount(props) {
  return (
    <>
      <p>{props.count}</p>
    </>
  );
}

function Butt() {
  const [qty, setQty] = useState(0);
  function handleClick(event) {
    setQty(qty + Math.floor(Math.random() * 10));
  }

  function resetCount(event) {
    setQty(0);
  }

  return (
    <>
      <button onClick={handleClick}>CLICK ME</button>
      <button onClick={resetCount}>RESET</button>
      <DisplayCount count={qty} />
    </>
  );
}

function States() {
  const [count, updateCount] = useState(45);

  useEffect(() => {
    console.log("YOU DID AN UPDATE")

  }, [count]);

  return(
    <>
    <button onClick={() => {updateCount(count + 2)}}>UPDATE</button>
    <h4>{count}</h4>
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
        <States />

      </header>
    </div>
  );
}

export default App;
