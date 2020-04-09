import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNoteData, editNote, clearForm, createNote } from './action';
import { showErrorMessage } from '../action';
import { Link } from 'react-router-dom';
import {
  Card,
  InputLabel,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  TextField,
} from '@material-ui/core';
import { form, formContent, formTitle } from './form.styles.scss';
import { withTranslation } from 'react-i18next';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isEmptyForm: 'true',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.note && prevState.isEmptyForm && !nextProps.isCreateForm) {
      return {
        title: nextProps.note.title,
        description: nextProps.note.description,
        isEmptyForm: false,
      };
    }
    return null;
  }

  componentDidMount() {
    const { loadNoteData, match, isCreateForm } = this.props;
    if (!isCreateForm) {
      const { id } = match.params;
      loadNoteData(`/${id}`);
    }
  }

  componentWillUnmount() {
    this.props.clearForm();
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChangeDetails = (e) => {
    this.setState({ description: e.target.value });
  };

  handleEditNote = () => {
    const { showErrorMessage, editNote, match, history } = this.props;
    const { id } = match.params;
    const { title, description } = this.state;
    if (title.length < 3) {
      return showErrorMessage('Error.smallString');
    }
    if (title.length > 50) {
      return showErrorMessage('Error.bigString');
    }

    editNote(id, title, description, history);
  };
  handleCreateNote = () => {
    const { showErrorMessage, createNote, history } = this.props;
    const { title, description } = this.state;
    if (title.length < 3) {
      return showErrorMessage('Error.smallString');
    }
    if (title.length > 50) {
      return showErrorMessage('Error.bigString');
    }

    createNote(title, description, history);
  };

  renderButton = () => {
    const { isCreateForm, isDetailsForm, t } = this.props;
    if (isCreateForm) {
      return (
        <Button
          aria-label="create"
          size="small"
          variant="contained"
          color="primary"
          onClick={this.handleCreateNote}
        >
          {t('Form.create')}
        </Button>
      );
    }
    if (isDetailsForm) {
      return (
        <Button component={Link} to="/" size="small" variant="contained" color="primary">
          ok
        </Button>
      );
    }
    return (
      <Button size="small" variant="contained" color="primary" onClick={this.handleEditNote}>
        {t('Form.save')}
      </Button>
    );
  };

  render() {
    const { title, description } = this.state;
    const { isDetailsForm, t } = this.props;

    return (
      <Container style={{ paddingTop: '60px' }} className={form} maxWidth="sm">
        <Card>
          <CardContent className={formContent}>
            <InputLabel className={formTitle} htmlFor="event-title">
              {t('Form.title')}
              <Box component="span" color="error.main">
                *
              </Box>
            </InputLabel>
            <TextField
              className={'MuiInputBase-input.Mui-disabled'}
              onChange={this.handleChangeTitle}
              value={title}
              disabled={isDetailsForm}
              id="form-title"
              fullWidth
              variant="outlined"
            />

            <Typography style={{ margin: '20px 0px 5px' }} color="textSecondary">
              {t('Form.description')}
            </Typography>
            <TextField
              value={description}
              onChange={this.handleChangeDetails}
              disabled={isDetailsForm}
              fullWidth
              id="form-description"
              multiline
              rows="13"
              variant="outlined"
            />
          </CardContent>

          <CardActions style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
            {this.renderButton()}

            {!isDetailsForm && (
              <Button component={Link} to="/" size="small" variant="contained" color="secondary">
                {t('Form.cancel')}
              </Button>
            )}
          </CardActions>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ note: state.noteData });
const mapDispatchToProps = { loadNoteData, editNote, clearForm, createNote, showErrorMessage };

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(NoteDetails));
