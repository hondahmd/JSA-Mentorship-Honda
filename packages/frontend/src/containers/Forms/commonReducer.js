import fieldsCheck from 'constants/fieldsCheck';

// reducer cases
const actionPairs = checkPairs => ({
  TEXT_FOCUS: (state, action) => {
    const { focusId } = action.payload;
    const newState = { ...state };
    newState.fields[focusId].show = true;
    return newState;
  },
  TEXT_INPUT: (state, action) => {
    const { changeId, input } = action.payload;
    const newState = { ...state };
    newState.fields[changeId].input = input;
    newState.fields[changeId].status = checkPairs[changeId](input, newState);
    newState.isReady = fieldsCheck.checkReady(newState.fields);
    return newState;
  },
  SIGNIN_INIT: state => ({ ...state, fetchStatus: 0 }),
  START_FETCHING: state => ({ ...state, fetchStatus: 1 }),
  SIGNIN_SUCCESS: state => ({ ...state, fetchStatus: 2 })
});

export default actionPairs;
