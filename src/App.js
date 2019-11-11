import React, { Component } from 'react';
import Contacts from './components/contact/003contatcts';
import AddContact from './components/contact/addContact';
import Header from './components/layout/002header';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (

      <Provider>

      <div className="App">
        <Header title="Contact Manager"/>
        <div className="container">
          <AddContact />
          <Contacts/>
        </div>
      </div>

      </Provider>
    );
  } 
}
export default App;
