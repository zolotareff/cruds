const mysql = require('mysql');

// Define MySQL connection URL
const MYSQL_HOST = process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net'; // Default to localhost if MYSQL_HOST environment variable is not set
const MYSQL_USER = process.env.MYSQL_USER || 'sql10701770';
const MYSQL_PASS = process.env.MYSQL_PASS || 'uh4Vi5Y7dZ';
const MYSQL_PORT = process.env.MYSQL_PORT || 3306; // Default MySQL port
const MYSQL_DB = 'sql10701770'; // Your MySQL database name

// Construct MySQL connection URL
const connectionUrl = `mysql://${MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}`;
//const connectionUrl = `mysql://${MYSQL_HOST}:${MYSQL_USER}:${MYSQL_PASS}:${MYSQL_PORT}/${MYSQL_DB}`;


//mysql://${MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}

// Create MySQL connection
const connection = mysql.createConnection(connectionUrl);

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
  
  // Perform database operations
  // For example, you can execute SQL queries here
});

// Close MySQL connection when done
connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
    return;
  }
  console.log('MySQL connection closed.');
});
