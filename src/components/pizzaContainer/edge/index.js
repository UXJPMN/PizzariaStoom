import { useDispatch, useSelector } from 'react-redux';
import SelectRadio from '../../selectRadio';

function Edge() {
  const edgeList = useSelector((state) => state.details.components.edges);
  const selectedEdge = useSelector((state) => state.details.selected.edge);
  const dispatch = useDispatch();

  function selectEdge(data) {
    dispatch({ type: 'SELECT_DETAIL', payload: { edge: data } });
  }

  return (
    <div className="edge-wrapper">
      <h2>Escolha a borda:</h2>
      <SelectRadio
        items={ edgeList }
        callback={selectEdge}
        selected={[ selectedEdge ]}
      />
    </div>
  );
}

export default Edge;
