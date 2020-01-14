export const fields = [
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

// initialize state
export const initState = {
  fields: {
    email: { input: '', show: false, status: false },
    password: { input: '', show: false, status: false }
  },
  isReady: false,
  fetchStatus: 0
};
