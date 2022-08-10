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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM branches WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Branch(rows[0]);
  }



  static async insert({ name, age, dob }) {
    const { rows } = await pool.query(
      'INSERT INTO branches (name, age, dob) VALUES ($1, $2, $3) RETURNING *',
      [name, age, dob]
    );
    return new Branch(rows[0]);
  }






};
