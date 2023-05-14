const express = require('express');

const app = express();
const verifyWorkingHours = require('./middlewares/verifyWorkingHours'); 
const router=require("./route.js")
app.use(verifyWorkingHours,router);

app.use(express.static(__dirname+"/css"))


app.listen(3000, () => {
    console.log('Server started on port 3000.');
  });