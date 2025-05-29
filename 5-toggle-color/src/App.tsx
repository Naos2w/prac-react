import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleColor = () => {
    setIsDark(!isDark);
  };
  const style = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
    textAlign: "center" as const,
    transition: "0.3s ease-in-out",
  }
  return (
    <div className="App">
      <h1 style={style}>Now is { isDark ? "Dark Mode" : "Normal Mode" } </h1>
      <button onClick={toggleColor}>Click to toggle</button>
    </div>
  );
}

export default App;
