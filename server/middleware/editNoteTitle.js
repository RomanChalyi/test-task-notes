const notes = require('../models/initTable');

module.exports = (req, res, next) => {
  const { id, title } = req.body;
  req.params.id = id;
  notes
    .update({ title }, { where: { id } })
    .then(() => {
      next();
    })
    .catch(() => res.status(501).json('Bad request'));
};
