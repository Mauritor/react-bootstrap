import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Top2020 from './pages/Top2020';
import FormDisco from './pages/FormDisco'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/crearDisco"  component= {FormDisco} />
      <Route path="/top2020"  component= {Top2020} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
