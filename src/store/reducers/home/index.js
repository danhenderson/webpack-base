import { createReducer } from 'utils/reducers';

let defaultState = {
  title: 'Example Title'
};

export default createReducer(defaultState, {

  'UPDATE_TITLE': (state, payload) => ({
    ...state,
    title: payload.title
  })

});
