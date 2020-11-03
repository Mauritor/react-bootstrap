import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Top2020 from './components/Top2020';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/top2020" exact component= {Top2020} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
