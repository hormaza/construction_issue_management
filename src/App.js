import React from 'react';
import logo from './logo.svg';
import Navbar from './features/counter/Navbar'
import AddIssueForm from './features/counter/AddIssueForm'
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddIssueForm />
      
    </div>
  );
}

export default App;
