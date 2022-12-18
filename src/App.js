import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <p><a href="https://github.com/AaLin-Git/Weather-react" target="_blank" rel="noreferrer">Open-source</a>, by Alona Kovalchuk from <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">SheCodes</a></p>
      </header>
    </div>
  );
}

export default App;
