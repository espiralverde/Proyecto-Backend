const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

const router = require('./src/routes/index')

app.use('/api', router)

module.exports = app
