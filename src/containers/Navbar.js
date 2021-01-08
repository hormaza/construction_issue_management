import React from 'react';
import autodeskLogo from '../assets/imgs/autodesk_logo.png';
import styled from 'styled-components'

function Navbar() {
  return (
    <Header>
      <div className="logo-container">
        <img height="40px" src={autodeskLogo}></img>
      </div>
      <div className="title">
        <h1>Construction Issues Management</h1>
      </div>
      <div className="author">
        <h3><a href="mailto:matias.hormaza@globant.com">Matias Hormaza</a></h3>
      </div>
    </Header>
  )
}

const Header = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
  margin-bottom: 20px;

  .logo-container {
    padding: 10px;
  }
  .title {
    text-align: center;
    h1 {
      margin: 10px 0;
    }
  }

  .author {
    a {
      color: black;
      text-decoration: none;
      padding: 10px;
      :active {
        color: #bacfe6;
      }
    }
  }
`

export default Navbar;