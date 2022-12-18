import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <p><a href="/">Open-source</a>, by Alona Kovalchuk from <a href="https://www.shecodes.io/">SheCodes</a></p>
      </header>
    </div>
  );
}

export default App;
