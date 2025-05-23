const mysql = require("mysql2");
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
    this.db = mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "jogo_api",
      port: process.env.DB_PORT || 3306,
    });
    this.db.connect((err) => {
      if (err) {
        console.error("Erro ao conectar no MySQL: ", err.message);
      } else {
        console.log("Conectado ao MySQL.");
        this._createTable();
      }
    });
  }

  _createTable() {
    // Criação da tabela empresas
    const tbEmpresa = `
      CREATE TABLE IF NOT EXISTS empresas (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL UNIQUE
      );
    `;
    this.db.query(tbEmpresa, (err) => {
      if (err) console.error("Erro ao criar tabela: ", err.message);
      else {
        console.log("Tabela 'empresas' verificada/criada.");
        this._seed();
      }
    });

    // Criação da tabela jogos
    const tbJogo = `
      CREATE TABLE IF NOT EXISTS jogos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE,
        categoria VARCHAR(255) NOT NULL,
        ano INT NOT NULL,
        fk_empresa INT NOT NULL,
        FOREIGN KEY(fk_empresa) REFERENCES empresas(id)
      );
    `;
    this.db.query(tbJogo, (err) => {
      if (err) console.error("Erro ao criar tabela: ", err.message);
      else console.log("Tabela 'jogos' verificada/criada.");
    });
  }

  _seed() {
    const query = "INSERT IGNORE INTO empresas (nome) VALUES (?)";
    this.db.query(query, ["Nintendo"], (err) => {
      if (err) console.error("Erro ao criar empresa: ", err.message);
      else console.log("Empresa criada.");
    });
    this.db.query(query, ["Ubisoft"], (err) => {
      if (err) console.error("Erro ao criar empresa: ", err.message);
      else console.log("Empresa criada.");
    });
    this.db.query(query, ["Dumativa"], (err) => {
      if (err) console.error("Erro ao criar empresa: ", err.message);
      else console.log("Empresa criada.");
    });
    this.db.query(query, ["Bethesda"], (err) => {
      if (err) console.error("Erro ao criar empresa: ", err.message);
      else console.log("Empresa criada.");
    });
  }
}

// Exporta uma única instância do banco
module.exports = new Database();