import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, List, Typography, Box, Button } from '@material-ui/core';
import Item from './item/Item';
import { loadNotesList, deleteNote } from './action';
import {
  list,
  listTitle,
  listContent,
  listItem,
  listEmpty,
  listButtonCreate,
} from './notesList.module.scss';
import { withTranslation } from 'react-i18next';

class NotesList extends Component {
  componentDidMount() {
    const { loadNotesList } = this.props;
    loadNotesList();
  }

  render() {
    const { notes, deleteNote, t } = this.props;

    return (
      <Box className={list}>
        <Container maxWidth="sm">
          <Box className={listTitle}>
            <Typography color="primary" align="center" variant="h4">
              {t('Notes List.1')}
            </Typography>
          </Box>
          <Box className={listContent}>
            <List aria-label="list" component="nav" className={listItem}>
              {notes &&
                notes.map((note) => <Item note={note} key={note.id} deleteNote={deleteNote} />)}
              {notes.length === 0 && (
                <Typography className={listEmpty} variant="h6">
                  {t('List of notes is empty.1')}
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
              {t('create.1')}
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({ notes: state.notesList });
const mapDispatchToProps = { loadNotesList, deleteNote };

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(NotesList));
