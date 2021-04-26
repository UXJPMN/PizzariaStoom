import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  components: {
    edges: [],
    sauces: [],
    sizes: [],
    toppings: [],
  },
  selected: {
    edge: '',
    sauce: '',
    size: '',
    toppings: [],
  },
  suggestion: '',
};

export const { Types, Creators } = createActions({
  setDetails: [],
  selectDetail: ['payload'],
  selectToppings: ['payload'],
});

const setDetails = (state = INITIAL_STATE, { payload }) => {
  const { components, suggestion } = payload;
  const tempState = state;

  tempState.components = components;
  tempState.suggestion = suggestion;

  return tempState;
}

const selectDetail = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  selected: { ...state.selected, ...payload }
});

const selectToppings = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  selected: {
    ...state.selected,
    toppings: payload,
  }
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_DETAILS]: setDetails,
  [Types.SELECT_DETAIL]: selectDetail,
  [Types.SELECT_TOPPINGS]: selectToppings,
});
