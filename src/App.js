import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contact/003contatcts';
import AddContact from './components/contact/addContact';
import Header from './components/layout/002header';
import About from './components/pages/About';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (

      <Provider>
        <Router>
          <div className="App"> 
            <Header title="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path ="/" component={Contacts} />
                <Route exact path ="/contact/add" component={AddContact} />
                <Route exact path ="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  } 
}
export default App;
