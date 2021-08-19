const router = require('express').Router();
const guest = require('./guest.routes');
const game = require('./game.routes')

router.use('/api/guest', guest);
router.use('/api/game', game);

module.exports = router;