import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import SelectRadio from '../../selectRadio';

function Sauce() {
  const sauceList = useSelector((state) => state.details.components.sauces);
  const selectedSauce = useSelector((state) => state.details.selected.sauce);
  const dispatch = useDispatch();

  function selectSauce(data) {
    dispatch({ type: 'SELECT_DETAIL', payload: { sauce: data } });
  }

  return (
    <div className="sauce-wrapper">
      <h2>Escolha o molho:</h2>
      <SelectRadio
        items={ sauceList }
        callback={selectSauce}
        selected={[ selectedSauce ]}
      />
    </div>
  );
}

export default Sauce;
