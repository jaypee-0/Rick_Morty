import React from 'react';

const Filter = () => {
  const Status = ['Alive', 'Dead', 'unknown'];
  const Species = ['Human', 'Alien', 'unknown'];
  const Gender = ['Male', 'Female'];
  const Type = [
    'Genetic experiment',
    'unknown',
    'Superhuman (Ghost trains summoner)',
    'Human with antennae',
    'Human with ants in his eyes',
  ];

  return (
    <div className='d-flex mb-3 flex-wrap justify-content-evenly'>
      <select>
        <option>Status</option>
        {Status.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
      <select>
        <option>Species</option>
        {Species.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
      <select>
        <option>Gender</option>
        {Gender.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
      <select>
        <option>Type</option>
        {Type.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
