const express = require('express')
const app = express()
const path = require('path')

var port = process.env.PORT || 3030

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/script', (req, res)=>{
  res.sendFile(path.join(__dirname + '/bundle.js'))
})

app.listen(port, ()=>{
  console.log('listening on port: ' + port)
})
