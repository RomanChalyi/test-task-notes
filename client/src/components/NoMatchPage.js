import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const NoMatchPage = () => {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            Page not found
          </Typography>
          <Typography variant="subtitle1">
            Maybe the page you are looking for has been removed, or you typed in the wrong URL
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/" variant="contained" color="secondary">
            Go Home
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NoMatchPage;
