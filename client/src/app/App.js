import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = (props) => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.statuses.isLoading,
  isError: state.statuses.isError,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
