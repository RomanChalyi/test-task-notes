const notes = require('../models/initTable');

module.exports = (req, res, next) => {
  const { id, description } = req.body;
  notes
    .update({ description }, { where: { id } })
    .then(() => {
      next();
    })
    .catch(() => res.status(501).json('Bad request'));
};
