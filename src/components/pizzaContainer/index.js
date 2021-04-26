import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzaData, sendPizzaData } from '../../store/services';
import './style.scss';
import SimpleNavigation from './simpleNavigation';
import Edge from './edge';
import Sauce from './sauce';
import Size from './size';
import Toppings from './toppings';
import PizzaDetails from './pizzaDetails';
import Card from '../card';
import Modal from '../modal';

function PizzaContainer() {
  const currentStep = useSelector(store => store.currentStep);
  const selectedComponents = useSelector(store => store.details.selected);
  const [targetStep, setTargetStep] = useState(<Size />);
  const [disableFinish, setDisableFinish] = useState(true);
  const [modalText, setModalText] = useState('');
  const [modalClass, setModalClass] = useState('-hidden');
  const dispatch = useDispatch();

  async function finishPizza() {
    const response = await sendPizzaData({ ...selectedComponents });

    setModalText(response.message);
    setModalClass('modal');
  }

  useEffect(() => {
    switch(currentStep) {
      case 0:
        setTargetStep(<Size />);
        break;
      case 1:
        setTargetStep(<Edge />);
        break;
      case 2:
        setTargetStep(<Sauce />);
        break;
      case 3:
        setTargetStep(<Toppings />);
        break;
      default:
        setTargetStep(
          <div className="error">
            <h2>Algo inesperado aconteceu!</h2>
            <h3>Etapa não encontrada.</h3>
          </div>
        );
        break;
    }
  }, [currentStep]);

  useEffect(() => {
    const { edge, sauce, size, toppings } = selectedComponents;
    const hasEdge = edge !== '';
    const hasSauce = sauce !== '';
    const hasSize = size !== '';
    const hasToppings = toppings.length > 0;
    const enabled = hasEdge && hasSauce && hasSize && hasToppings;

    setDisableFinish(!enabled);
  }, [selectedComponents, selectedComponents.toppings]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchPizzaData();
      const { components, suggestion } = response;

      if (components && suggestion) {
        dispatch({ type: 'SET_DETAILS', payload: { components, suggestion } })
      }
    }
    fetchData();
  });

  return (
    <div className="pizza-container">
      <div className={modalClass}><Modal content={modalText}/></div>
      <div className="display">
        <Card content={targetStep} />
        <Card content={<PizzaDetails />} />
      </div>
      <SimpleNavigation />
      <button
        className="submit-pizza"
        onClick={finishPizza}
        disabled={disableFinish}
      >
        Finalizar Pizza
      </button>
    </div>
  );
}

export default PizzaContainer;
