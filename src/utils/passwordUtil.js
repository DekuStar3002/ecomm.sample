const bcrypt = require('bcrypt');
const { SALT_ROUND } = require('../constant');

const hashPassword = async (password) => {
  try {
    return await bcrypt(password, SALT_ROUND);
  } catch (err) {
    
  }
};