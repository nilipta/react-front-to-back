import React from 'react';
import Contacts from './components/003contatcts';
import Header from './components/002header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Contact Manager"/>
      <div className="container">
        <Contacts/>
      </div>
    </div>
  );
} 

export default App;
