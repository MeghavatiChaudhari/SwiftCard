
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Notfound } from './components/Notfound';
 function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/Signup'} component={Signup}/>
        <Route exact path={'/Login'} component={Login}/>
        <Route component={Notfound}/>
       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
