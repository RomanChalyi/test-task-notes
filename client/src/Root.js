import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './app/App';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default Root;
