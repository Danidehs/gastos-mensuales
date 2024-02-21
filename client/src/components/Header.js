import React from 'react';

export const Header = () => {
  return (
    <nav className='navbar navbar-light bg-dark'>
      <span
        className='navbar-brand mb-1 h1'
        style={{
          display: 'flex',
          color: 'white',
          paddingLeft: '5%',
        }}
      >
        Gastos del Mes
      </span>
    </nav>
  );
};

export default Header;
