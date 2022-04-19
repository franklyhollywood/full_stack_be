const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

module.exports = class UserService {
  static async create(user) {
    const passwordHash = await bcrypt.hash(
      user.password,
      Number(process.env.SALT_ROUNDS)
    );
    return User.create({
      username: user.username,
      email: user.email,
      passwordHash,
    });
  }
};
