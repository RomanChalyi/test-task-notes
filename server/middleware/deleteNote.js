const notes = require('../models/initTable');

module.exports = (req, res, next) => {
  const { id } = req.body;
  notes
    .destroy({ where: { id } })
    .then(() => next())
    .catch(() => res.status(501).json('Bad request'));
};
