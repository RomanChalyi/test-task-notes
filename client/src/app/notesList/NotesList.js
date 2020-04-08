import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, List, Typography, Box, Button } from '@material-ui/core';
import Item from './item/Item';
import { loadNotesList } from './action';
import { list, listTitle, listContent, listItem } from './notesList.module.scss';

class NotesList extends Component {
  componentDidMount() {
    const { loadNotesList } = this.props;
    loadNotesList();
  }

  render() {
    const { notes } = this.props;

    return (
      <Box className={list}>
        <Container maxWidth="sm">
          <Box className={listTitle}>
            <Typography align="center" variant="h4">
              NotesList
            </Typography>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Box>

          <Box className={listContent}>
            <List component="nav" className={listItem} aria-label="secondary mailbox folders">
              {notes && notes.map((note) => <Item note={note} key={note.id} />)}
              {!notes && <p>list of notes is empty</p>}
            </List>
          </Box>
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({ notes: state.notesList.notes });
const mapDispatchToProps = { loadNotesList };

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
