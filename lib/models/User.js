const pool = require('../utils/pool.js');

module.exports = class User {
  id;
  email;
  username;
  #passwordHash;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.username = row.username;
    this.#passwordHash = row.password_hash;
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * from time_card_users`);
    return rows.map((row) => {
      return new User(row);
    });
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM time_card_users WHERE id = $1`,
      [id]
    );
    return new User(rows[0]);
  }

  static async create(user) {
    const { rows } = await pool.query(
      `
    INSERT INTO time_card_users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *`,
      [user.username, user.email, user.passwordHash]
    );
    return new User(rows[0]);
  }
};
