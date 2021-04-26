import { useSelector, useDispatch } from 'react-redux';
import SelectBox from '../../selectBox';

function Toppings() {
  const selectedToppings = useSelector(state => state.details.selected.toppings);
  const toppingList = useSelector(state => state.details.components.toppings);
  const dispatch = useDispatch();

  function selectTopping(target) {
    let toppingsArray = selectedToppings;
    const { checked, value } = target;
    
    if (checked) {
      toppingsArray.push(target.value);
    } else {
      toppingsArray = toppingsArray.filter((item) => {
        return item !== value;
      });
    }
    dispatch({ type: 'SELECT_TOPPINGS', payload: toppingsArray });
  }

  return(
    <div className="toppings-wrapper">
      <h2>Escolha até 5 ingredientes:</h2>
      <SelectBox
        items={toppingList}
        callback={selectTopping}
        selected={selectedToppings}
        max={5}
      />
    </div>
  );
}

export default Toppings;
