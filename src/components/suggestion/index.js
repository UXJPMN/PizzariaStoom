import { useSelector } from 'react-redux';
import './style.scss';

function Suggestion() {
  const suggestion = useSelector((state) => state.details.suggestion);

  return (
    <div className="suggestion-wrapper">
      <strong className="title">
        Sugestão do Dia:
      </strong>
      <span>{suggestion}</span>
    </div>
  );
}

export default Suggestion;
