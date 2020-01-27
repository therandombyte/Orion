const express = require('express');
const router = express.Router();

// A route and handler
router.get('/', (req,res) => {
    //res.send('Hello World');
    res.render('index', {title: "orion-api", message: "Welcome to Orion (TIPS Automation NodeJS API)"})
});

module.exports = router;