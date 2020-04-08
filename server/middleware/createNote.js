const notes = require('../models/initTable');

module.exports = (req, res) => {
  const { title, description } = req.body;
  notes
    .create({ title, description })
    .then((data) => res.json(data))
    .catch(() => res.status(501).json('Bad request'));
};
