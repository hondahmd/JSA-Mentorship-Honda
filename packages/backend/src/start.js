const app = require('./main.js');

const PORT = 5000;

app.listen(PORT, () => {
  console.log('init', `server's running on port ${PORT}`);
});
