const notes = require('../models/initTable');

module.exports = (req, res) => {
  const { id } = req.params;
  notes
    .findOne({ where: { id } })
    .then((note) => res.json(note))
    .catch(() => res.status(501).json('Bad request'));
};
