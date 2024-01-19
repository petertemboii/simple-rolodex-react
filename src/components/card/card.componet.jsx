import React from "react";
import "./card.styles.css";

function Card(props) {
  const { name, id, email, item } = props;
  return (
    <div key={id} className="card-container">
      <img
        src={`https://robohash.org/${item.id}?set=2&size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
