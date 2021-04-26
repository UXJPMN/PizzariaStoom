import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

function Navigation () {
  const currentStep = useSelector(state => state.currentStep);
  const dispatch = useDispatch();
  const activeStep = (step) => { 
    return currentStep === step ? 'active': '';
  }

  function changeStep(step) {
    dispatch({ type: 'CHANGE_STEP', id: step });
  }

  return (
    <div className="navigation-wrapper">
      <ul>
        <li className={activeStep(0)}>
          <button onClick={() => changeStep(0)}>Tamanho</button>
        </li>
        <li className={activeStep(1)}>
          <button onClick={() => changeStep(1)}>Borda</button>
        </li>
        <li className={activeStep(2)}>
          <button onClick={() => changeStep(2)}>Molho</button>
        </li>
        <li className={activeStep(3)}>
          <button onClick={() => changeStep(3)}>Ingredientes</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
