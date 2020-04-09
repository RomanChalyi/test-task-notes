import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const NoMatchPage = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            {t('Page not found.1')}
          </Typography>
          <Typography variant="subtitle1">
            {t(
              'Maybe the page you are looking for has been removed, or you typed in the wrong URL.1'
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/" variant="contained" color="primary">
            {t('Go Home.1')}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NoMatchPage;
