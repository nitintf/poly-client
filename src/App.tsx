import { config } from 'config';
import './App.scss';

function App() {
  const apiUrl = config.app.origin;

  return (
    <div className="card">
      <p>{apiUrl}</p>
    </div>
  );
}

export default App;
