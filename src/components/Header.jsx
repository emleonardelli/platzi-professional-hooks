import React from 'react';

const Header = ({darkMode, setDarkMode}) => {

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>{!darkMode ? 'DarkMode' : 'LightMode'}</button>
    </div>
  )
}

export default Header