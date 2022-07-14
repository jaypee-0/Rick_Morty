import React from 'react';

const Card = ({ id, image, name, status, created }) => {
  return (
    <div key={id} className='carding col-6 col-md-4 col-lg-3'>
      <img className='rounded img-fluid' src={image} alt={name} />
      <h3 className='lato fs-5 mb-0 text-danger'>{name}</h3>
      <p className='lato d-flex align-items-center'>
        {status === 'Dead' && (
          <div
            className='mx-1 bg-danger'
            style={{ borderRadius: 50, width: 5, height: 5 }}
          />
        )}
        {status === 'Alive' && (
          <div
            className='mx-1 bg-success'
            style={{ borderRadius: 50, width: 5, height: 5 }}
          />
        )}
        {status === 'unknown' && (
          <div
            className='mx-1'
            style={{
              borderRadius: 50,
              width: 5,
              height: 5,
              backgroundColor: 'gray',
            }}
          />
        )}
        {status}
      </p>
    </div>
  );
};

export default Card;
