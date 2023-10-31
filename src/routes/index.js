const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index'); // Certifique-se de usar aspas na string
});

module.exports = router;
