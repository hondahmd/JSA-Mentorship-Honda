const app = require('./server/main');
const dbConn = require('./database/conn');

dbConn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log('init', `server's running on port ${PORT}`);
});
