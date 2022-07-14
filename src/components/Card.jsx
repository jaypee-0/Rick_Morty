import React from 'react';

const Card = ({ id, image, name, status, species, type, gender}) => {
  return (
    <div key={id} className='carding border-bottom pb-2 align-items-center d-flex mb-3'>
      <img className='rounded'style={{width: 100, height: 100}} src={image} alt={name} />
      <div className='ms-2 '>

      <h3 className='lato fs-5 mb-0 fw-bold text-danger'>{name}</h3>
      <div className='d-flex flex-wrap'>
      <p className='mb-0 lato d-flex'>
        <span className='text-muted fw-bold'>Status:</span>
        {status === 'Dead' && (
          <div
            className='mx-1 bg-danger my-auto'
            style={{ borderRadius: 50, width: 5, height: 5 }}
          />
        )}
        {status === 'Alive' && (
          <div
            className='mx-1 bg-success my-auto'
            style={{ borderRadius: 50, width: 5, height: 5 }}
          />
        )}
        {status === 'unknown' && (
          <div
            className='mx-1 my-auto'
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
      <p className='mb-0 ms-2 me-4'>
      <span className='text-muted fw-bold me-1'>Species:</span>
        {species}
      </p>
      <p className='mb-0 me-4'>
      <span className='text-muted fw-bold me-1'>Gender:</span>
        {species}
      </p>
        <p className='mb-0 '>
      <span className='text-muted fw-bold me-1'>Type:</span>
        {type ? type : 'unknown'}

        </p>
        </div>
            </div>
    </div>
  );
};

export default Card;
