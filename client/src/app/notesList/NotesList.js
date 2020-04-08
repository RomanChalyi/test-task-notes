import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, List, Typography, Box, Button } from '@material-ui/core';
import Item from './item/Item';
import { loadNotesList, deleteTournament } from './action';
import {
  list,
  listTitle,
  listContent,
  listItem,
  listEmpty,
  listButtonCreate,
} from './notesList.module.scss';

class NotesList extends Component {
  componentDidMount() {
    const { loadNotesList } = this.props;
    loadNotesList();
  }

  render() {
    const { notes, deleteTournament } = this.props;

    return (
      <Box className={list}>
        <Container maxWidth="sm">
          <Box className={listTitle}>
            <Typography color="primary" align="center" variant="h4">
              NotesList
            </Typography>
          </Box>
          <Box className={listContent}>
            <List component="nav" className={listItem}>
              {notes &&
                notes.map((note) => (
                  <Item note={note} key={note.id} deleteTournament={deleteTournament} />
                ))}
              {!notes && (
                <Typography className={listEmpty} variant="h6">
                  List of notes is empty
                </Typography>
              )}
            </List>
          </Box>
          <Box align="center">
            <Button
              component={Link}
              to="/create"
              className={listButtonCreate}
              variant="contained"
              color="primary"
            >
              Create
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({ notes: state.notesList });
const mapDispatchToProps = { loadNotesList, deleteTournament };

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
