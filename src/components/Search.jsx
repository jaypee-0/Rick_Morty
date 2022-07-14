import React from 'react'

const Search = () => {
  return (
    <form>
      <input
        className='border py-1 px-2'
        placeholder='Search by name'
        onChange={(e) => operations.updateFilter('name', e.target.value)}
        type='string'
      />
      <button
        onClick={() =>
          refetch({
            charactersInput: { name: models.filters.name },
          })
        }
        className='border py-1 px-2 tiro'>
        search
      </button>
    </form>
  )
}

export default Search