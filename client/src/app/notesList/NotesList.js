import React from 'react';
import { connect } from 'react-redux';

const NotesList = () => {
  return <div>NotesList</div>;
};

const mapStateToProps = (state) => ({ notes: state.notesList });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
