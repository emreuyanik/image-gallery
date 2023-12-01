// Card.jsx

import data from '../data';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      {data.map(({ photographer, src }) => (
        <div key={src.large} className="card">
          <img
            src={src.large}
            alt={`Photography by ${photographer}`}
          />
          <h2>{photographer}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
