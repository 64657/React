// const express = require("express");
// const { registerUser, authUser, updateUserProfile } = require("../controllers/userControllers");
// const { protect } = require("../middlewares/authMiddleware");

// const router = express.Router()

// router.route('/').post(registerUser)
// router.route('/login').post(authUser)
// router.route('/profile').post(protect, updateUserProfile)

// module.exports = router;












// // Routes for password reset
// app.post('/api/users/reset-password', async (req, res) => {
//     try {
//       const { email } = req.body;
  
//       const user = await User.findOne({ email });
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       const resetToken = crypto.randomBytes(20).toString('hex');
//       user.resetPasswordToken = resetToken;
//       user.resetPasswordExpires = Date.now() + 3600000; // Token valid for 1 hour
  
//       await user.save();
  
//       // Send a password reset email with the reset token
//       const transporter = nodemailer.createTransport({
//         service: 'YourEmailService', // Example: Gmail, Outlook, etc.
//         auth: {
//           user: 'your-email@gmail.com',
//           pass: 'your-email-password',
//         },
//       });
  
//       const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: user.email,
//         subject: 'Password Reset',
//         text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
//           + `Please click on the following link to complete the process:\n\n`
//           + `http://localhost:3000.com/reset-password/${resetToken}\n\n`
//           + `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
//       };
  
//       transporter.sendMail(mailOptions, (err) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Email could not be sent' });
//         }
//         res.status(200).json({ message: 'Password reset link sent to your email' });
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   app.get('/api/users/reset-password/:token', async (req, res) => {
//     try {
//       const token = req.params.token;
  
//       const user = await User.findOne({
//         resetPasswordToken: token,
//         resetPasswordExpires: { $gt: Date.now() },
//       });
  
//       if (!user) {
//         return res.status(400).json({ message: 'Invalid or expired token' });
//       }
  
//       res.status(200).json({ userId: user._id });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   app.post('/api/users/reset-password/:token', async (req, res) => {
//     try {
//       const token = req.params.token;
//       const { newPassword } = req.body;
  
//       const user = await User.findOne({
//         resetPasswordToken: token,
//         resetPasswordExpires: { $gt: Date.now() },
//       });
  
//       if (!user) {
//         return res.status(400).json({ message: 'Invalid or expired token' });
//       }
  
//       user.password = newPassword;
//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpires = undefined;
  
//       await user.save();
  
//       res.status(200).json({ message: 'Password reset successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });