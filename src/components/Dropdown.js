import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-black  text-center items-center bg-yellow-500 '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link  to='/' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Home
      </Link>
      <Link to='/menu' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Menu
      </Link>
      <Link to='/about' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        About
      </Link>
      <Link to='/contact' className='p-4 hover:bg-black text-white transition rounded-cover duration-300 ease-in-out'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;