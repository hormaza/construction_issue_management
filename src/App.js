import React from 'react';
import Navbar from './features/Navbar'
import AddIssueForm from './features/AddIssueForm'
import IssueList from './features/IssueList'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddIssueForm />
      <IssueList />
    </div>
  );
}

export default App;
