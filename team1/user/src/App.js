import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import About from './components/About';
import Demo from './components/Demo';
import Home from './components/Home';
import LoggedInHome from './components/LoggedInHome';
import Login from './components/Login';
import Signup from './components/Signup';


class App extends React.Component{

 render() {
  return(
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<LoggedInHome/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )}
}

export default App;
