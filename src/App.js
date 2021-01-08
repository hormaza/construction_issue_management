import React from 'react';
import Navbar from './containers/Navbar'
import AddIssueForm from './containers/AddIssueForm'
import IssueList from './containers/IssueList'


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
