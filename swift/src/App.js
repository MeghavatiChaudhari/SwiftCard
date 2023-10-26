
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Notfound } from './components/Notfound';
import { AddProducts } from './components/AddProducts';
 function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/Signup'} element={<Signup />} />
        <Route exact path={'/Login'} element={<Login />} />
        <Route exact path={'/add-products'} element={< AddProducts/>}/>
        <Route element={<Notfound />}/>
       </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
