import { useQuery } from '@apollo/client';
import { getAllCharacters } from './components/Queries/Queries';
import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import error404 from './assets/error.png';
import './App.scss';
import Filter from './components/Filter';
import Search from './components/Search';

function App() {
  const { loading, error, data } = useQuery(getAllCharacters);
  if (loading)
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <p className='fs-1 fw-bold'>Loading...</p>
      </div>
    );
  if (error)
    return (
      <p className='col-10 m-auto col-md-5'>
        <img className='img-fluid' src={error404} alt='ERROR!' />
        {console.log(error.name)}
      </p>
    );

  return (
    <div className='App'>
      <Header />
      <div className='container mt-3'>
        <Search />
        <Filter />
        <div className='heading'>
          <h4 className='tiro'>
            Characters created on {''}
            {data.characters.results[0].created.slice(0, 10)}
          </h4>
        </div>
        <div className='d-flex flex-column flex-wrap'>
          {data &&
            data.characters.results.map(
              ({ id, name, status, image, created, species, type, gender }) => {
                return (
                  <Card
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    type={type}
                    created={created}
                    image={image}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
