import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = 0;

export const { Types, Creators } = createActions({
  changeStep: ['id'],
});

const change = (state = INITIAL_STATE, { id }) => (id);

export default createReducer(INITIAL_STATE, { [Types.CHANGE_STEP]: change });
