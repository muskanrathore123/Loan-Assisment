import React from 'react'
import Body from './Body';

function Home() {
  return (
    <div>
      <div className="md:w-full md:pl-16 md:pr-16 flex flex-col items-center pt-16  bg-gray-300 h-96 lg:pl-48 lg:pr-48">
        <p className="md:text-lg font-semibold text-orange-600 mb-8">
          Loan Management
        </p>
        <h1 className="md:text-3xl lg:text-5xl font-semibold mb-7">
          Loan management system
        </h1>
        <p className="text-gray-500 text-lg">Next-gen loan management system</p>
         <p className='md: text-center text-gray-500 text-lg'>
          Experience a seamless next-gen loan management system  focused on
          working capital, built to meet the growing needs of banks and NBFCs
          with the flexibility to add a layer or replace existing LMS; to
          support the flexible and timely launch of new products.
        </p>
      </div>
      <Body/>
    </div>
  );
}

export default Home
