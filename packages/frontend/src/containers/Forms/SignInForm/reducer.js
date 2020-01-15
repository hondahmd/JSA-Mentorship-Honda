import common from 'containers/Forms/commonReducer';
import fieldsCheck from 'constants/fieldsCheck';

// initialize state
const initState = {
  fields: {
    email: { input: '', show: false, status: false },
    password: { input: '', show: false, status: false }
  },
  fetchStatus: 0
};

const actionPairs = {
  ...common,
  TEXT_INPUT: (state, action) => {
    const { changeId, input } = action.payload;
    const newState = { ...state };
    const checkPairs = { email: fieldsCheck.email, password: fieldsCheck.basic };
    newState.fields[changeId].input = input;
    newState.fields[changeId].status = checkPairs[changeId](input);
    return newState;
  },
  CLEAR_STATE: () => initState
};

export default (state, action) => {
  if (action.type in actionPairs) return actionPairs[action.type](state, action);
  return state;
};
