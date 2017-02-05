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

router.get('/task/todo',(req,res)=>{
    TaskModel.find({completed:false},(err,doc)=>{
        if(err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

router.get('/task/complete',(req,res)=>{
    TaskModel.find({completed:true},(err,doc)=>{
        if(err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

router.put('/task/complete/:id',(req,res)=>{
    const id = req.params.id;
    TaskModel.findByIdAndUpdate(id,{completed:true},(err,doc)=>{
        if(err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

router.put('/task/incomplete/:id',(req,res)=>{
    const id = req.params.id;
    TaskModel.findByIdAndUpdate(id,{completed:false},(err,doc)=>{
        if(err)
            res.send(err).status(501);
        else
            res.send(doc).status(201);
    });
});

module.exports = router;