import React from 'react';
import logo from '../budget.png';

function Header({ generateReport }) {
  return (
    <header>
      <div className="header-left">
        <img src={logo} className="logo" alt="Logo" />
        <div>EXPENSE TRACKER</div>
      </div>
      <button onClick={generateReport}>GENERATE REPORT</button>
    </header>
  );
}

export default Header;
