import React from "react";
import "./Card.css";

export default function Card(props) {

  const cardStyle = {
    backgroundColor: props.color || '#ff7f50',
    borderColor: props.color || '#ff7f50'
  }

  return (
    <>
      <div className="Card" style={cardStyle}>
        <div className="Title">{props.titulo}</div>
        <div className="Content">{props.children}</div>
      </div>
    </>
  );
};
