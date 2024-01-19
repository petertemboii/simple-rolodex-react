import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.componet";

function CardList(props) {
  return (
    <div className="card-list">
      {props.usersList.map((item) => {
        const { name, id, email } = item;
        return (
          <Card name={name} id={id} email={email} item={item}/>
        );
      })}
    </div>
  );
}

export default CardList;
