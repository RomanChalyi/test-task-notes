import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNoteDetails, clearNoteDetails } from './action';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class NoteDetails extends Component {
  componentDidMount() {
    const { loadNoteDetails, match } = this.props;
    const { id } = match.params;
    loadNoteDetails(`/${id}`);
  }
  componentWillUnmount() {
    this.props.loadNoteDetails();
  }
  handleClick = () => {
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
            Title:
          </Typography>
          <Typography variant="h5" component="h2">
            {note.title}
          </Typography>
          <Typography color="textSecondary">Description:</Typography>
          <Typography variant="body2" component="p">
            {note.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.handleClick}>
            Home
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({ note: state.noteDetails });
const mapDispatchToProps = { loadNoteDetails, clearNoteDetails };

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
