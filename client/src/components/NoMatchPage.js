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
            {t('404.title')}
          </Typography>
          <Typography variant="subtitle1">{t('404.description')}</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/" variant="contained" color="primary">
            {t('404.link')}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NoMatchPage;
