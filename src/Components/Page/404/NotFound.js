import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container mx-auto px-2'>
      <div className="relative w-[100%] h-[100vh]">
        <div className='absolute top-1/2 left-[30%] md:left-[40%] lg-[50%] text-center'>
          <h1 className='text-center text-4xl font-semibold font-serif text-slate-600'>404</h1>
          <h1 className='text-4xl font-semibold font-serif text-slate-600'>No Found</h1>
          <Link className='underline text-center ' to='/'>Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;