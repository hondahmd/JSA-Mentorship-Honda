import common from 'containers/Forms/commonReducer';
import fieldsCheck from 'constants/fieldsCheck';

const actionPairs = {
  ...common,
  TEXT_INPUT: (state, action) => {
    const { changeId, input } = action.payload;
    const newState = { ...state };
    const checkPairs = {
      firstName: fieldsCheck.name,
      lastName: fieldsCheck.name,
      password: fieldsCheck.basic,
      confirmPassword: confirm => confirm === newState.fields.password.input,
      email: fieldsCheck.email
    };
    newState.fields[changeId].input = input;
    newState.fields[changeId].status = checkPairs[changeId](input);
    return newState;
  }
};

export default (state, action) => {
  if (action.type in actionPairs) return actionPairs[action.type](state, action);
  return state;
};
