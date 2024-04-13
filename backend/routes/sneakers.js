const express = require('express');
const router = express.Router();
const controllers = require("../controllers/sneaker");

router.get('/sneakers', controllers.getSneakers );
router.get('/sneakers/:id', controllers.getSneaker );

module.exports = router;
