const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const db = "mongodb://localhost/tasklist";

const indexRouter = require('./server/routes/index');
const apiRouter = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'dist')));

app.use('/',indexRouter);
app.use('/api',apiRouter);

mongoose.connect(db,(err)=>{
    if(err){
        return err;
    }
    console.log("Successfully connected to " + db);
});

const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);

server.listen(port,()=>console.log('Server running on localhost:'+port));