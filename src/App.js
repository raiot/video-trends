import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './router';
import { Nav } from './components';
import { loadVideos } from './store/actions/video.action';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVideos());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
          {routes.map(route =>
            <Route key={route.key} exact path={route.path} component={route.component} />)}
      </Switch>
    </Router>
  );
}

export default App;
