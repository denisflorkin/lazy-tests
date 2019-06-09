import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// commons
import routes from './routes';
import AppLayout from './composites/AppLayout';
import Header from './leafs/Header';
import Main from './leafs/Main';
import Footer from './leafs/Footer';


import './App.css';


function App() {
  return (
    <Router>
      <AppLayout
        header={<Route component={Header} />}
        main={(
          <Main>
            {
              routes.map(({ path, exact, component }) => (
                <Route key={`${path}-${exact ? 'exact' : ''}-${component.displayName}`} path={path} exact={exact} component={component} />
              ))
            }
          </Main>
        )}
        footer={<Footer />}
      />
    </Router>
  );
}

export default App;
