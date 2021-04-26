import { useSelector } from 'react-redux';
import './style.scss';

function PizzaDetails() {
  const selected = useSelector(state => state.details.selected);

  const edge = (
    <span>{selected.edge}</span>
  );
  const sauce = (
    <span>{selected.sauce}</span>
  );
  const size = (
    <span>{selected.size}</span>
  );
  const toppings = selected.toppings.map((item) => {
    return (
      <li key={item} className="item">{item}</li>
    );
  });

  return (
    <span className="pizza-details">
      <h2>Detalhes da pizza:</h2>
      <div className="detail">
        <span className="title">
          Tamanho: 
        </span>
        {size}
      </div>
      <div className="detail">
        <span className="title">
          Borda: 
        </span>
        {edge}
      </div>
      <div className="detail">
        <span className="title">
          Molho: 
        </span>
        {sauce}
      </div>
      <div className="detail">
        <span className="title">
          Ingredientes: 
        </span>
        <ul className="list">
          {toppings}
        </ul>
      </div>
    </span>
  );
}

export default PizzaDetails;
