const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next)=>{
    res.send('<h2>Hello User</h2>');
})

app.listen(6200);//////////////