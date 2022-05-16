import React, {Fragment} from 'react'
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About';
import  {solid} from '@fortawesome/fontawesome-svg-core/import.macro'



const App = () =>{
  return (
    <Router>
    <Fragment>
    <Navbar title="Contacts Register" icon={solid("address-card")}  />
   
    <div className='container'>
     <Routes>
     <Route exact path="/" element ={<Home />} />
        <Route  path="/about" element={<About />
        } />
     </Routes>
    </div>

   
    </Fragment>
    </Router>





   



  );
}

export default App;
