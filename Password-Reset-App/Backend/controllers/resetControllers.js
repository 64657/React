// const express = require('express');
const asynchandler = require('express-async-handler');
const User = require('../models/userModels');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { resetPasswordEmailTemplate } = require('../utils/resetPasswordEmailTemplate'); // Create the email template function
const generateToken = require('../utils/generateToken')
const bcrypt = require('bcryptjs')


// const router = express.Router();

// Generate a random token for password reset
// const generateResetToken = () => {
//   return crypto.randomBytes(20).toString('hex');
// };

// Route to initiate the password reset process
const initiatePasswordReset = asynchandler(async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = generateToken(user._id);
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token valid for 1 hour
    // await user.
    await user.save();

    // Send a password reset email with the reset token
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example: Gmail, Outlook, etc.
      auth: {
        user: 'faseeullah.1998@gmail.com',
        pass: 'ifeqwkewysxcscda',
      }
    });

    const resetLink = `https://passwordreset-olmp.onrender.com/reset-password/?token=${resetToken}`;
   console.log(resetPasswordEmailTemplate)
    const mailOptions = {
      from: 'faseeullah.1998@gmail.com',
      to: user.email,
      subject: 'Password Reset',
      text: resetPasswordEmailTemplate(resetLink) // You can create this template
    
    };
    
    // transporter.sendMail(mailOptions, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({ message: 'Email could not be sent' });
    //   }
    //   res.status(200).json({ message: 'Password reset link sent to your email' });
    // });
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Password reset link sent to your email' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Email could not be sent' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to verify the reset token
const verifyResetToken = asynchandler(async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({
      resetPasswordToken: token,
      // resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    res.status(200).json({ userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to reset the password
const resetPassword = asynchandler(async (req, res) => {
  try {
    const token = req.params.token;
    const { password } = req.body;
    console.log(token);
    const user = await User.findOne({
      resetPasswordToken : token,
      // resetPasswordExpires: { $gt: Date.now() }
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    user.password = hashedPassword;
    // user.resetPasswordToken = undefined;
    // user.resetPasswordExpires = undefined;

    // await user.save();
    let user1 = await User.findOneAndUpdate({email: user.email}, {password: hashedPassword})
    console.log(user1);
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// router.post('/reset-password', initiatePasswordReset);
// router.get('/reset-password/:token', verifyResetToken);
// router.post('/reset-password/:token', resetPassword);

module.exports = {initiatePasswordReset,resetPassword,verifyResetToken};
