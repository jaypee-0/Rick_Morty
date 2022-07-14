import React from 'react';

const Search = () => {
  return (
    <form className='d-flex mb-3'>
      <input
        className='border w-100 py-2 px-3'
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
        className='border py-1 px-2 px-md-3 tiro'>
        search
      </button>
    </form>
  );
};

export default Search;
