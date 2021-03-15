import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loeader = () => {
  return (
    <div>
      <Spinner
        animation='grow'
        role='status'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
          background:
            'radial-gradient(circle, rgba(185,184,184,1) 0%, rgba(102,107,111,1) 1%, rgba(63,69,75,1) 4%, rgba(53,59,65,1) 25%, rgba(26,31,36,1) 52%, rgba(0,0,0,1) 100%)',
        }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loeader;
