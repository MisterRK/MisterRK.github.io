const express = require('express')
const mailRouter = express.Router()
const nodemailer = require('nodemailer')

console.log('Inside the mailer')
const transport = {
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   auth: {
      user: process.env.THE_EMAIL,
      pass: process.env.THE_PASSWORD
   }
};

const transporter = nodemailer.createTransport(transport);
// transporter.verify((error, success) => {
//    if(error) {
//       console.error(errror)
//    } else {
//       console.log("Message Sent")
//    }
// })

mailRouter.post('/', (req, res,next) => {
   const mail = {
      from: req.body.from,
      to: process.env.THE_EMAIL,
      subject: req.body.subject,
      text: `
      from: ${req.body.name}
      
      contact: ${req.body.email}
      
      message: ${req.body.text}`
   }

   transporter.sendMail(mail, (err,data) => {
      if(err){
         res.json({message: "fail"})
      } else {
         res.json({message: 'success'})
      }
   })
})

module.exports = mailRouter