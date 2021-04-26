import './style.scss';

function Card({ content }) {
  return (
    <div className="card-wrapper">
      {content}
    </div>
  );
}

export default Card;
