import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import SelectRadio from '../../selectRadio';

function Size() {
  const sizeList = useSelector((state) => state.details.components.sizes);
  const selectedSize = useSelector((state) => state.details.selected.size);
  const dispatch = useDispatch();

  function selectSize(data) {
    dispatch({ type: 'SELECT_DETAIL', payload: { size: data } });
  }

  return (
    <div className="size-wrapper">
      <h2>Escolha o tamanho:</h2>
      <SelectRadio
        items={ sizeList }
        callback={selectSize}
        selected={[ selectedSize ]}
      />
    </div>
  );
}

export default Size;
