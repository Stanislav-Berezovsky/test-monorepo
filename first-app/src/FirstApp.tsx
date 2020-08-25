import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FIRST_APP, AdditionalInformation } from '../../common/common-utils';

const Home = () =>{
  return (
    <div className="App">
      <div>{ `${FIRST_APP} - home page` }</div>
      <AdditionalInformation />
      <Link to="/test">Move to test page</Link>
    </div>
  );
}

const TestPage = () =>{
  return (
    <div className="App">
      <div>{ `${FIRST_APP} - test page` }</div>
      <AdditionalInformation />
      <Link to="/">Move to home page</Link>
    </div>
  );
}

const FirstApp = () => {
  return (
    <div className="App">
      {FIRST_APP}
      <Router>
        <Switch>
          <Route 
            path="/"
            component={Home}
            exact
          />
           <Route 
            path="/test"
            component={TestPage}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default FirstApp;
