const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
const frontEnd = require("./frontendRoutes");

router.use('/api', apiRoutes);
router.use("/", frontEnd);

router.get("/showsessions", (req, res) => {
    res.json(req.session);
});

module.exports = router;
