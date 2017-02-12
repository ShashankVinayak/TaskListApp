// Contains code to setup server

//References to use respective APIs 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');

//Initialize app and database
const app = express();
const db = "mongodb://localhost/tasklist";

//References to different routes
const indexRouter = require('./server/routes/index');
const apiRouter = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'dist')));

app.use('/',indexRouter);
app.use('/api',apiRouter);

//Connect to database
mongoose.connect(db,(err)=>{
    if(err){
        return err;
    }
    console.log("Successfully connected to " + db);
});

const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);

//Start server
server.listen(port,"0.0.0.0",()=>console.log('Server running on localhost:'+port));
