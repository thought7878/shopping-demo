const express = require('express')
const { PORT, DB_URL } = require('./constants/config')

const app = express()

// connect mongo
const mongoose = require('mongoose')
mongoose.connect(DB_URL)
const db = mongoose.connection
db.on('error', () => {
  console.log(`Mongo failed to connect!!!`)
})
db.on('connected', () => console.log(`Mongo connected`))

// middleware
const parser = require('body-parser')
app.use(parser())

const routes = require('./routes')
routes(app)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})
