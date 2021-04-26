import { combineReducers } from 'redux';
import details from './details';
import currentStep from './currentStep';

export default combineReducers({
  currentStep,
  details,
});
