const notes = require('../models/initTable');

module.exports = (req, res) => {
  notes
    .findAll({ attributes: ['id', 'title'] })
    .then((notes) => res.json(notes))
    .catch(() => res.status(501).json('Bad request'));
};
