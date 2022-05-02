import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import LoggedInHome from './components/LoggedInHome';
import Login from './components/Login';
import SignUp from './components/SignUp';


class App extends React.Component{

 render() {
  return(
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<LoggedInHome/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  )}
}

export default App;