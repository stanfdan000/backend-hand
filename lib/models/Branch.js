const pool = require('../utils/pool.js');

module.exports = class Branch {
  id;
  name;
  age;
  dob;


  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.dob = row.dob;

  }


  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM branches');
    return rows.map((row) => new Branch(row));
  }




};
