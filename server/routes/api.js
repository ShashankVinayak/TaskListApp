const express = require('express');
const router = express.Router();
const TaskModel = require('../models/taskmodel');

router.post('/task', (req, res) => {
    const task = new TaskModel(req.body);
    task.save((err, doc) => {
        if (err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

router.delete('/task/:id',(req,res)=>{
    const id = req.params.id;
    TaskModel.findByIdAndRemove(id,(err,doc)=>{
        if(err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

router.get('/task',(req,res)=>{
    TaskModel.find((err,doc)=>{
        if(err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

module.exports = router;