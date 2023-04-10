const express = require('express');
const app = express();
const port = 9800;

app.listen(9800,function(err){
    if(err){
        console.log(` Error! in running server: ${err}`);
    }

    console.log(`Server is running:${port}`);
})