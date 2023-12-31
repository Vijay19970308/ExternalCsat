import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';
import oktaConfig from './config';
import './App.css';
import queryString from 'query-string';

const oktaAuth = new OktaAuth(oktaConfig.oidc);

const App = () => {
  useEffect(() => {
    const params = queryString.parse(window.location.search);
    if (params?.campaignId)
      localStorage.setItem("campaignId", params?.campaignId);
  }, []);

  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <Route path="/" exact component={Home} />
          <SecureRoute path="/protected" component={Protected} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/login/callback" component={LoginCallback} />
        </Security>
      </header>
    </div>
  );
};

export default App;