import React from 'react';
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import About from './About';
import Profile from './Profile';
import Home from './Home';
import LoginFail from './LoginFail';
import LoginSucces from './LoginSucces';
import CountCounter from './CountCounter';
import RefDemo from './RefDemo';

function RouterDemo(props) {
    return (
    
      <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/refDemo">Ref Demo</Link></li>
                  </ul>
              </nav>
            <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/LoginSuccess" element={<LoginSucces/>}/>
              <Route exact path="/LoginFail" element={<LoginFail/>}/>
              <Route exact path="/counter" element={<CountCounter/>}/>
              <Route exact path="/refDemo" element={<RefDemo/>}/>
            </Routes>
        </Router>
    );
}

export default RouterDemo;