const express = require("express");
const { registerUser, authUser, updateUserProfile } = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const { initiatePasswordReset, verifyResetToken, resetPassword } = require("../controllers/resetControllers");

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').put(protect, updateUserProfile)
router.route('/reset-password').post(initiatePasswordReset);
router.route('/reset-password/:token').get(verifyResetToken);
router.route('/reset-password/:token').post(resetPassword);

module.exports = router;