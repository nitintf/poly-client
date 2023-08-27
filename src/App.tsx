import { useState } from 'react';
import { config } from 'config';
import reactLogo from './assets/react.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  const apiUrl = config.app.origin;

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count} {apiUrl}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
