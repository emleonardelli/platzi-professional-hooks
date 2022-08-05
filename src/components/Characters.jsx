import React, { useMemo } from 'react'
import { useCharacter } from '../hooks/useCharacter';
import { Search } from './Search';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      console.log(state);
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
  
    default:
      return state;
  }
}

const API = 'https://rickandmortyapi.com/api/character';

export const Characters = () => {
  const characters = useCharacter(API);
  const [favorites, dispatch] = React.useReducer(favoriteReducer, initialState);
  const [search, setSearch] = React.useState('');
  const searchInput = React.useRef(null);

  //const handleSearch = () => {
  //  setSearch(searchInput.current.value);
  //}

  const handleSearch = React.useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  }

  //const filteredUsers = characters.filter(u => 
  //  u.name.toLowerCase().includes(search.toLowerCase())
  //);

  const filteredUsers = useMemo(()=>
    characters.filter(u => 
      u.name.toLowerCase().includes(search.toLowerCase())
  ), [characters, search])
  

  return (
    <>
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
      {favorites.favorites.map(e => (
        <li key={e.id}>{e.name}</li>
      ))}
      <br />
      <div className="Characters" style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center'}}>
        {filteredUsers.map(e => (
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
            <button onClick={() => handleClick(e)}>Agregar a favoritos</button>
          </div>
        ))}
      </div>
    </>
  )
}