// const express = require('express');
const asynchandler = require('express-async-handler');
const User = require('../models/userModels');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { resetPasswordEmailTemplate } = require('../utils/resetPasswordEmailTemplate'); // Create the email template function

// const router = express.Router();

// Generate a random token for password reset
const generateResetToken = () => {
  return crypto.randomBytes(20).toString('hex');
};

// Route to initiate the password reset process
const initiatePasswordReset = asynchandler(async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = generateResetToken();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token valid for 1 hour

    await user.save();

    // Send a password reset email with the reset token
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example: Gmail, Outlook, etc.
      auth: {
        user: 'faseeullah.1998@gmail.com',
        pass: 'ifeqwkewysxcscda',
      }
    });

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
   console.log(resetPasswordEmailTemplate)
    const mailOptions = {
      from: 'faseeullah.1998@gmail.com',
      to: user.email,
      subject: 'Password Reset',
      text: resetPasswordEmailTemplate(resetLink) // You can create this template
    
    };
    
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Email could not be sent' });
      }
      res.status(200).json({ message: 'Password reset link sent to your email' });
    });
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
    const { newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// router.post('/reset-password', initiatePasswordReset);
// router.get('/reset-password/:token', verifyResetToken);
// router.post('/reset-password/:token', resetPassword);

module.exports = {generateResetToken,initiatePasswordReset,resetPassword,verifyResetToken};
