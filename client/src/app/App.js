import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Router from './Router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { box } from './app.module.scss';

const App = ({ isLoading, isError, errorInfo }) => {
  return (
    <>
      <Header />
      <Loader visible={isLoading} />
      <ErrorMessage isError={isError} errorInfo={errorInfo} />
      <Box className={box}>
        <Router />
      </Box>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.statuses.isLoading,
  isError: state.statuses.isError,
  errorInfo: state.statuses.errorInfo,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
