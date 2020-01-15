export default [
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    alerts: { error: 'Invalid email', correct: 'Correct' }
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    alerts: { error: 'Password should not be empty', correct: 'Correct' }
  }
];
