import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNoteDetails } from '../noteDetails/action';
import { Card, InputLabel } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';

class NoteDetails extends Component {
  componentDidMount() {
    const { loadNoteDetails, match } = this.props;
    const { id } = match.params;
    loadNoteDetails(`/${id}`);
  }
  componentWillUnmount() {
    // this.props.clearForm();
  }
  handleClick = () => () => {
    const { history } = this.props;
    history.push('');
  };
  render() {
    const { note } = this.props;
    if (!note) {
      return null;
    }
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <Box component="span" color="error.main">
              *
            </Box>
            Title:
          </Typography>
          <Input value={note.title} />
          <Typography color="textSecondary">Description:</Typography>
        </CardContent>
        <TextareaAutosize
          rowsMin="5"
          style={{ width: '80%' }}
          variant="filled"
          value={'testsdfdgadgrafdgdfgdsgdsfffffffffffffffffffffffffffffffffffffffffffffffff'}
        />
        <CardActions>
          <Button size="small" onClick={this.handleClick()}>
            Save
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({ note: state.noteDetails });
const mapDispatchToProps = { loadNoteDetails };

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
