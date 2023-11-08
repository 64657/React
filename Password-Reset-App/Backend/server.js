const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// const User = require('./models/userModel');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const path = require("path");



const userRoutes = require('./routes/userRoutes');
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");


const app = express();

dotenv.config();

const DB_URL = process.env.DB_URL;


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to your MongoDB database
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

  
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'Gmail', // Use the name of your email service provider, e.g., 'Gmail', 'Outlook', etc.
    auth: {
      user: 'faseeullah.1998@gmail.com', // Your email address
      pass: 'rtnpvdaxsoedwopy', // Your email password
    },
  })
);

// Example email content
const mailOptions = {
  from: 'faseeullah.1998@gmail.com', // Sender's email address
  to: 'recipient-email@example.com', // Recipient's email address create API for recipient is pending...
  subject: 'Test Email',
  text: 'This is a test email sent using nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


  app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/users', userRoutes);




// let transporter = nodemailer.createTransport({



app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
