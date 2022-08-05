import React from 'react'

export const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="search">
        <input
          ref={searchInput}
          type="text"
          value={search}
          onChange={handleSearch}
        />
    </div>
  )
}
