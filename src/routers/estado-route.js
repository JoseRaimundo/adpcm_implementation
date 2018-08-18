'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/estado-controller');

router.get('/:id', controller.get);
router.post('/', controller.post);

module.exports = router;    