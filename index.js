const express = require('express')
var app = express()

app.get('/', (req,res)=>{
    res.send('Hello baby')
})

app.listen(8080, () =>{
    console.log('Server started on 8080')
})