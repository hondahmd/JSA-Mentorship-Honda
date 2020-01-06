const app = require('./main.js');
const Users = require('./database/tables/users');

Users.findAll().then(users => {
  console.log('All users:', JSON.stringify(users, null, 4));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log('init', `server's running on port ${PORT}`);
});
