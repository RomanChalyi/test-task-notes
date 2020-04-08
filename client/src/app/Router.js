import React from 'react';
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NotesList from './notesList/NotesList';
import NoMatchPage from '../components/NoMatchPage';
import Details from './noteDetails/NoteDetails';
import Form from './form/Form';

export const customHistory = createBrowserHistory();

const Router = () => (
  <BrowserRouter history={customHistory}>
    <Switch>
      <Route exact path="/" component={NotesList} />
      <Route exact path="/details/:id" component={Details} />
      <Route exact path="/event/:id" component={Form} />
      <Route component={NoMatchPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
