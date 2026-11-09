var path = require('path');
const Database = require('better-sqlite3');

module.exports = new Database(
  process.env.DB_PATH || path.join(__dirname, 'var', 'personal_website.sqlite3')
);
