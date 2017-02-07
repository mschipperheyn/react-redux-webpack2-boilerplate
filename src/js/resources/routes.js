import React from 'react';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';

import App from 'screens/App';
import Dashboard from 'screens/Dashboard';
import About from 'screens/About';
import NotFound from 'screens/NotFound';
import Menu from 'components/navigation/Menu';

const publicPath = '/';

const Routes = () => (
  <Router>
      <App>
          <div>
              <Menu/>
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/about" component={About} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </App>
  </Router>
);

export default Routes;
