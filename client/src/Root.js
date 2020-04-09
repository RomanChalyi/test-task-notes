import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './app/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './styles/styles.scss';

const customHistory = createBrowserHistory();

const Root = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router history={customHistory}>
          <App />
        </Router>
      </I18nextProvider>
    </Provider>
  );
};
export default Root;
