const pool = require('../utils/pool.js');

module.exports = class Movie {
  id;
  name;
  type;
  year;


  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.year = row.year;

  }


  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM movies');
    return rows.map((row) => new Movie(row));
  }




};
