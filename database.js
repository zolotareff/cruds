const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "sql10.freemysqlhosting.net",
    user: "sql10701770",
    password: "uh4Vi5Y7dZ",
    database: "sql10701770"
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados');
});

module.exports = connection;