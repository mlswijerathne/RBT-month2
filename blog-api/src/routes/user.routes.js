const router   = require('express').Router();
const auth     = require('../middleware/auth');
const validate = require('../middleware/validate');
const { getMe, updateMe, updateValidation } = require('../controllers/user.controller');

router.get('/me',  auth, getMe);
router.put('/me',  auth, updateValidation, validate, updateMe);

module.exports = router;
