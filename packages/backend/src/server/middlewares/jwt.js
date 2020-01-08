function jwtError(ctx, next) {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
}

module.exports = {
  jwtError
};
