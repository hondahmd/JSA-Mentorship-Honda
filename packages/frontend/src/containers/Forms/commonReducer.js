// reducer cases
const actionPairs = {
  TEXT_FOCUS: (state, action) => {
    const { focusId } = action.payload;
    const newState = { ...state };
    newState.fields[focusId].show = true;
    return newState;
  },
  SIGNIN_INIT: state => ({ ...state, fetchStatus: 0 }),
  START_FETCHING: state => ({ ...state, fetchStatus: 1 }),
  SIGNIN_SUCCESS: state => ({ ...state, fetchStatus: 2 })
};

export default actionPairs;
