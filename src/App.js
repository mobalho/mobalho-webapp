import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Mobalho from './pages/mobalho/Mobalho';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mobalho} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
