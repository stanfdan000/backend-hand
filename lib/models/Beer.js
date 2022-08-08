const pool = require('../utils/pool.js');

module.exports = class Beer {
  id;
  name;
  type;
  manufactured;


  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.manufactured = row.manufactured;
    this.calories = row.calories;
    this.oz = row.oz;

  }


  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM beers');
    return rows.map((row) => new Beer(row));
  }


  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM beers WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Beer(rows[0]);
  }



};
