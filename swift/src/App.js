
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Notfound } from './components/Notfound';

 function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/Signup'} element={<Signup />} />
        <Route exact path={'/Login'} element={<Login />} />
        <Route element={<Notfound />}/>
       </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
