var express = require('express')
var app = express()


app.get('/',(req,res)=>{
res.send('Welcome to the Github')
})

app.get('*',(req,res)=>{
res.send('Error page not found')
})


const port = 3000;
app.listen(port, ()=>{
console.log('server started at port: '+ port)
})
