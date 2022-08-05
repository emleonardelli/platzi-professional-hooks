import React from 'react'

export const useCharacter = url => {
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCharacters(data.results));
    }, [url])
    
  return characters;
}
