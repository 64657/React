const resetPasswordEmailTemplate = (resetLink) => {
    return `
      You are receiving this email because you (or someone else) has requested a password reset for your account.
      Please click the following link to reset your password:
      ${resetLink}
  
      If you didn't request this, please ignore this email, and your password will remain unchanged.
    `;
  };
  
  module.exports = {resetPasswordEmailTemplate};
  