export const createReducer = (defaultState, reducerMap) => (state = defaultState, action) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
