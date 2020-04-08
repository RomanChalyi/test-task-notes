import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './app/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/styles.scss';

const customHistory = createBrowserHistory();

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        <App />
      </Router>
    </Provider>
  );
};
export default Root;
