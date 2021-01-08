import React from 'react';
import Navbar from './features/counter/Navbar'
import AddIssueForm from './features/counter/AddIssueForm'
import IssueList from './features/counter/IssueList'

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
