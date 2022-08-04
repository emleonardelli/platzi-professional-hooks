import { useState } from 'react';
import './App.css';
import { Characters } from './components/Characters';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App" style={{
      margin: '0px',
      padding: '0px',
      backgroundColor: darkMode ? '#444444' : '#ffffff'
      }}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Characters />
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
