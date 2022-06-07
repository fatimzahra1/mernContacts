import React, {Fragment} from 'react'
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import  {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

if (localStorage.getItem('token')){
  setAuthToken(localStorage.getItem('token'))
}



const App = () =>{
  return (
    <AuthState>
    <ContactState>
    <AlertState>
    <Router>
    <Fragment>
    <Navbar title="Contacts Register" icon={solid("address-card")}  />
   
    <div className='container'>
     <Alerts />
     <Routes>
        <Route exact path="/" element ={<Home />} />
        <Route  path="/about" element={<About /> } />
        <Route  path="/register" element={<Register /> } />
        <Route  path="/login" element={<Login /> } />
     </Routes>
    </div>

   
    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>




   



  );
}

export default App;
