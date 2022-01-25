const express = require('express')
const serveeStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveeStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('listen on port: ' + port)