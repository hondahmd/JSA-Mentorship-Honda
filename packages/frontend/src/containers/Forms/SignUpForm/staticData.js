export const fields = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
    alerts: { correct: 'Correct', error: 'Invalid input' }
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: 'text',
    alerts: { correct: 'Correct', error: 'Invalid input' }
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    alerts: { correct: 'Correct', error: 'Password should not be empty' }
  },
  {
    id: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    alerts: { correct: 'Correct', error: 'Not match' }
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    alerts: { correct: 'Correct', error: 'Invalid email' }
  }
];

// initialize state
export const initState = {
  fields: {
    firstName: { input: '', show: false, status: false },
    lastName: { input: '', show: false, status: false },
    password: { input: '', show: false, status: false },
    confirmPassword: { input: '', show: false, status: false },
    email: { input: '', show: false, status: false }
  },
  isReady: false,
  fetchStatus: 0
};
