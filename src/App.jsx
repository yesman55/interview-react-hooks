import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './views/profilePage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ProfilePage />
      </div>
    );
  }
}

export default App;