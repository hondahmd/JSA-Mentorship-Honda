const conn = require('./conn');

const promiseQueryNoInput = sqlString => {
  return new Promise((resolve, reject) => {
    conn.query(sqlString, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

const promiseQueryWithInput = (sqlString, input) => {
  return new Promise((resolve, reject) => {
    conn.query(sqlString, input, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

module.exports = {
  promiseQueryNoInput,
  promiseQueryWithInput
};
