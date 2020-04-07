import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, List } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Item from './item/Item';
import { loadNotesList } from './action';

class NotesList extends Component {
  componentDidMount() {
    const { loadNotesList } = this.props;
    loadNotesList();
  }
  render() {
    const { notes } = this.props;

    return (
      <Container maxWidth="sm">
        <p style={{ margin: '0px', textAlign: 'center' }}>NotesList</p>
        <Divider />
        <Box style={{ background: 'white' }}>
          <List component="nav" aria-label="secondary mailbox folders">
            {notes && notes.map((note) => <Item note={note} key={note.id} />)}
            {!notes && <p>list of notes is empty</p>}
          </List>
        </Box>
        <Divider />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ notes: state.notesList.notes });
const mapDispatchToProps = { loadNotesList };

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
