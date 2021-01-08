import React from 'react';
import autodeskLogo from '../assets/imgs/autodesk_logo.png';

function Navbar() {
  return (
    <header>
      <img src={autodeskLogo}></img>
      <h1>Construction Issues Management</h1>
    </header>
  )
}

export default Navbar;