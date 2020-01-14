import React, { FunctionComponent, ReactElement } from "react";

import "./styles/card.scss";

interface CardProps {
  title: string;
  text: string;
}

const Card: FunctionComponent<CardProps> = ({ title, text }) => {
  return (
    <div className="card-component card-wrapper">
      <div className="card-content">
        <h1 className="card-title">{title}</h1>

        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
