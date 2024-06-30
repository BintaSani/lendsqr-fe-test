import React  from 'react';
import { Routes, Route } from 'react-router-dom';
// import image from './'
import './App.scss';
import SignIn from './pages/signin/signin';
import User from './pages/user/user';
import UserDetails from './pages/user-details/user-details';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' Component={SignIn}/>
      <Route path='/user' Component={User}/>
      <Route path='/user-details' Component={UserDetails}/>
      </Routes>
    </div>
  );
}

export default App;
