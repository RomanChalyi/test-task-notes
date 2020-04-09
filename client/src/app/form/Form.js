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
      titleValue: '',
      descriptionValue: '',
      isFormClear: 'true',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.note && prevState.isFormClear && !nextProps.isCreateForm) {
      return {
        titleValue: nextProps.note.title,
        descriptionValue: nextProps.note.description,
        isFormClear: false,
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
    this.setState({ titleValue: e.target.value });
  };

  handleChangeDetails = (e) => {
    this.setState({ descriptionValue: e.target.value });
  };

  handleEditNote = () => {
    const { showErrorMessage, editNote, match, history } = this.props;
    const { id } = match.params;
    const { titleValue, descriptionValue } = this.state;
    if (titleValue.length < 3) {
      return showErrorMessage('The title of the note should not be shorter than 3 characters');
    }
    if (titleValue.length > 50) {
      return showErrorMessage(
        'The title of the note should not be must not be longer than 50 characters'
      );
    }

    editNote(id, titleValue, descriptionValue, history);
  };
  handleCreateNote = () => {
    const { showErrorMessage, createNote, history } = this.props;
    const { titleValue, descriptionValue } = this.state;
    if (titleValue.length < 3) {
      return showErrorMessage('The title of the note should not be shorter than 3 characters');
    }
    if (titleValue.length > 50) {
      return showErrorMessage(
        'The title of the note should not be must not be longer than 50 characters'
      );
    }

    createNote(titleValue, descriptionValue, history);
  };

  render() {
    const { isCreateForm, isDetailsForm, t } = this.props;
    const { titleValue, descriptionValue } = this.state;
    const renderButton = () => {
      if (isCreateForm) {
        return (
          <Button size="small" variant="contained" color="primary" onClick={this.handleCreateNote}>
            {t('create.1')}
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
          {t('save.1')}
        </Button>
      );
    };

    return (
      <Container style={{ paddingTop: '60px' }} className={form} maxWidth="sm">
        <Card>
          <CardContent className={formContent}>
            <InputLabel className={formTitle} htmlFor="event-title">
              {t('Title.1')}
              <Box component="span" color="error.main">
                *
              </Box>
            </InputLabel>
            <TextField
              className={'MuiInputBase-input.Mui-disabled'}
              onChange={this.handleChangeTitle}
              value={titleValue}
              disabled={isDetailsForm}
              id="form-title"
              fullWidth
              variant="outlined"
            />

            <Typography style={{ margin: '20px 0px 5px' }} color="textSecondary">
              {t('Description.1')}
            </Typography>
            <TextField
              value={descriptionValue}
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
            {renderButton()}

            {!isDetailsForm && (
              <Button component={Link} to="/" size="small" variant="contained" color="secondary">
                {t('cancel.1')}
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
