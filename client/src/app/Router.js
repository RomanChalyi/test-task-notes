import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotesList from './notesList/NotesList';
import NoMatchPage from '../components/NoMatchPage';
import Form from './form/Form';

const Router = () => (
  <Switch>
    <Route exact path="/" component={NotesList} />
    <Route exact path="/details/:id" render={(props) => <Form {...props} isDetailsForm />} />
    <Route exact path="/edit/:id" component={Form} />
    <Route exact path="/create/" render={(props) => <Form {...props} isCreateForm />} />
    <Route component={NoMatchPage} />
  </Switch>
);

export default Router;
