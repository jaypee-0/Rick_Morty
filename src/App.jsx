import { useQuery } from '@apollo/client';
import { getAllCharacters } from './components/Queries/Queries';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import error404 from './assets/error.png';
import './App.scss';
import Filter from './components/Filter';
import gif from './assets/chemicalbottle.gif'

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
  console.log(data.characters.results[0].created);

  return (
    <div className='App'>
      <Header />
      <div className='container mt-3'>
        <div className='heading'>
          <h2 className='tiro'>RICK AND MORTY characters created on {data.characters.results[0].created.slice(0, 10)}</h2>
          <Filter />
        </div>
        <div className='d-flex flex-wrap'>
          {data &&
            data.characters.results.map(({ id, name, status, image, created }) => {
              return <Card id={id} name={name} status={status} created={created} image={image} />;
            })}
        </div>
      </div>
      <div className='container mt-3'>
        <div className='heading'>
          <h2 className='tiro'>RICK AND MORTY characters created on {data.characters.results[0].created}</h2>
          <Filter />
        </div>
        <div className='d-flex flex-wrap'>
          {data &&
            data.characters.results.map(({ id, name, status, image, created }) => {
              return <Card id={id} name={name} status={status} created={created} image={image} />;
            })}
        </div>
      </div>
      <div className='container mt-3'>
        <div className='heading'>
          <h2 className='tiro'>RICK AND MORTY characters created on {(data.characters.results[0].created).slice(0, 10)}</h2>
          <Filter />
        </div>
        <div className='d-flex flex-wrap'>
          {data &&
            data.characters.results.map(({ id, name, status, image, created }) => {
              return <Card id={id} name={name} status={status} created={created} image={image} />;
            })}
        </div>
      </div>
      <div className='container mt-3'>
        <div className='heading'>
          <h2 className='tiro'>RICK AND MORTY characters created on {data.characters.results[0].created}</h2>
          <Filter />
        </div>
        <div className='d-flex flex-wrap'>
          {data &&
            data.characters.results.map(({ id, name, status, image, created }) => {
              return <Card id={id} name={name} status={status} created={created} image={image} />;
            })}
        </div>
      </div>
      <div className='container mt-3'>
        <div className='heading'>
          <h2 className='tiro'>RICK AND MORTY characters created on {data.characters.results[0].created}</h2>
          <Filter />
        </div>
        <div className='d-flex flex-wrap'>
          {data &&
            data.characters.results.map(({ id, name, status, image, created }) => {
              return <Card id={id} name={name} status={status} created={created} image={image} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
