// Contains code to display the start page

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../dist/index.html'));
});

module.exports = router;