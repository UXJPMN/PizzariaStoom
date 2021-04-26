import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

function SimpleNavigation() {
  const currentStep = useSelector(state => state.currentStep);
  const dispatch = useDispatch();

  function decreaseStep() {
    dispatch({ type: 'CHANGE_STEP', id: currentStep - 1 });
  }

  function increaseStep() {
    dispatch({ type: 'CHANGE_STEP', id: currentStep + 1 });
  }

  return(
    <div className="simple-navigation">
      <button
        className="button"
        disabled={currentStep === 0} 
        onClick={decreaseStep}
      >
        Passo Anterior
      </button>
      <button
        className="button"
        disabled={currentStep === 3}
        onClick={increaseStep}
      >
        Próximo Passo
      </button>
    </div>
  );
}

export default SimpleNavigation;
