const notes = require('../models/initTable');

module.exports = (req, res) => {
  notes
    .findAll()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(501).json(err));
};
