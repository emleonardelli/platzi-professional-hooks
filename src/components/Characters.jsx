import React, { useEffect, useState } from 'react'

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, [])
  

  return (
    <div className="Characters" style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center'}}>
      {characters.map(e => (
        <div style={{
          minWidth: '200px',
          maxWidth: '200px',
          height: '300px',
          border: '1px solid gray',
          borderRadius: '5px',
          margin: '10px',
          backgroundColor: '#eeeeee'
          }}
          key={e.id}
        >
          <img src={e.image} alt={e.name} style={{width: '100%'}}/>
          <h2>{e.name}</h2>
        </div>
      ))}
    </div>
  )
}