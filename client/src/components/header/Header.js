import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Switch, Button } from '@material-ui/core';
import { headerHandler, headerTitle } from './header.module.scss';
import { useTranslation } from 'react-i18next';

const Header = ({ lang, setLanguage }) => {
  const { t } = useTranslation();
  const handleChange = () => {
    if (lang === 'ru') {
      return setLanguage('en');
    }
    setLanguage('ru');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={headerTitle}>
          <Button component={Link} to="/" variant="text" color="inherit">
            {t('Header.link')}
          </Button>
        </Box>
        <Box className={headerHandler}>
          <p>EN</p>
          <Switch color="default" onClick={handleChange} />
          <p>RUS</p>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
