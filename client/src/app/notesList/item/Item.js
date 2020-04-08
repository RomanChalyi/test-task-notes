import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem, Divider, ListItemText, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = ({ note, deleteTournament }) => {
  const { title, id } = note;
  const history = useHistory();
  const handleClick = () => history.push(`/details/${id}`);
  const handleOpenEditNote = () => history.push(`/edit/${id}`);
  const handleDeleteNote = () => {
    deleteTournament(id);
  };

  return (
    <>
      <ListItem button>
        <ListItemText
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          onClick={handleClick}
          primary={title}
        />
        <IconButton color="primary" onClick={handleOpenEditNote}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDeleteNote}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};
export default Notes;
