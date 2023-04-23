const express = require('express');
const app = express();
const port = 9000;

// use express router
app.use('/',require('./routes'))



app.listen(9000,function(err){
    if(err){
        console.log(` Error! in running server: ${err}`);
    }

    console.log(`Server is running:${port}`);
})