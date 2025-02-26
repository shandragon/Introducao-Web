const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

class Database {
  constructor() {
    if (!Database.instance) {
      this._connect();
      Database.instance = this;
    }
    return Database.instance;
  }

  _connect() {
    this.db = new sqlite3.Database(process.env.DB_NAME, (err) => {
      if (err) {
        console.error("Erro ao conectar no SQLite: ", err.message);
      } else {
        console.log("Conectado ao SQLite.");
        this._createTable();
      }
    });
  }

  _createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS jogos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        categoria TEXT NOT NULL,
        ano INTEGER NOT NULL
      );
    `;
    this.db.run(query, (err) => {
      if (err) console.error("Erro ao criar tabela: ", err.message);
      else console.log("Tabela 'jogos' verificada/criada.");
    });
  }
}

// Exporta uma única instância do banco
module.exports = new Database();