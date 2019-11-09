import React, { Component } from 'react';
import Contacts from './components/003contatcts';
import Header from './components/002header';

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
          <Contacts/>
        </div>
      </div>

      </Provider>
    );
  } 
}
export default App;
