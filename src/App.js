import React from 'react';
import Contact from './components/001contact';
import Header from './components/002header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Contact Manager"/>
      <Contact name="Nilipta" email="nilipta@hotmail.com"
        phone="9423734603"/>
      <Contact name="Mamuni" email="mamuni@hotmail.com"
        phone="9423734603"/>
    </div>
  );
}

export default App;
