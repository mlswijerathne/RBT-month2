const router = require('express').Router();
const auth = require('../middleware/auth');
const { deleteComment } = require('../controllers/comment.controller');

router.delete('/:id', auth, deleteComment);

module.exports = router;
