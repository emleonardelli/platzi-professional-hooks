import React from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = ({darkMode, setDarkMode}) => {
  const color =  React.useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="Header">
      <h1 style={{color}}>React Hooks</h1>
      <button type="button" onClick={handleClick}>{!darkMode ? 'DarkMode' : 'LightMode'}</button>
    </div>
  )
}

export default Header