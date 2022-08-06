const pool = require('../utils/pool.js');

module.exports = class Car {
  id;
  name;
  type;
  manufactured;


  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.manufactured = row.manufactured;

  }


  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cars');
    return rows.map((row) => new Car(row));
  }




};
