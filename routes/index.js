const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Slender-Man knows your address. Wrong route, btw.'));

module.exports = router;