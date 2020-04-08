import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem, Divider, ListItemText, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = ({ note }) => {
  const { title, id } = note;
  const history = useHistory();
  const handleClick = () => history.push(`/details/${id}`);
  const handleOpenEditNote = () => history.push(`/event/${id}`);
  const handleDeleteNote = () => {};

  return (
    <>
      <Divider />
      <ListItem button>
        <ListItemText onClick={handleClick} primary={title} />
        <IconButton color="primary" onClick={handleOpenEditNote}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" onClick={handleDeleteNote}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
};
export default Notes;
