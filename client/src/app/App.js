import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Router from './Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { box } from './app.module.scss';
import { hideErrorMessage, setLanguage } from './action';

const App = ({ isLoading, isError, errorInfo, hideErrorMessage, lang, setLanguage }) => {
  return (
    <>
      <Header lang={lang} setLanguage={setLanguage} />
      <Loader visible={isLoading} />
      <ErrorMessage isError={isError} errorInfo={errorInfo} hideErrorMessage={hideErrorMessage} />
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
  lang: state.statuses.lang,
});
const mapDispatchToProps = { hideErrorMessage, setLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(App);
