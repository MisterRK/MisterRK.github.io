const express = require('express')
const app = express()
require('dotenv').config()
const mailRouter = require('./routes/mailer')
const nodemailer = require('nodemailer')
const port = 4444

app.use(express.json())

app.use('/contact-me', mailRouter)

app.listen(port, ()=> {
   console.log('server is listening on PORT: ', port)
})