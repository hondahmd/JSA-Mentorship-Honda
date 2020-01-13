const basic = input => input !== '';

const regCheck = (reg, input) => reg.test(input);

const email = input =>
  regCheck(
    /[0-9a-z][_.0-9a-z-]{1,30}@[a-z0-9-]{1,65}.(com|net|org|info|biz|([a-z]{2,3}.[a-z]{2}))/,
    input
  );

const name = input => regCheck(/^[a-zA-Z]+$/, input);

export default {
  basic,
  email,
  name
};
