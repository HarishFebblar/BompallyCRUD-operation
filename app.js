var express = require('express')
var app = express()

const port = 3000;
app.listen(port, ()=>{
console.log('server started at port: '+ port)
})
