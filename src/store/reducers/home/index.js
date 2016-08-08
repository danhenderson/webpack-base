import { createReducer } from '../../../utils/reducers';

let defaultState = {
  title: 'Example Title'
};

export default createReducer(defaultState, {

  'UPDATE_TITLE': (state, payload) => {
    console.log('UPDATE_TITLE');
    return {
      ...state,
      title: payload.title
    }
  }

});
