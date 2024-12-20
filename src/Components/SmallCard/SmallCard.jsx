import React from "react";
import "./style.css";

const SmallCard = ({ heading, number, text, theme, darkTheme }) => {
  return (
    <div className="card" style={{ backgroundColor: theme }}>
      <p className="heading">{heading}</p>
      <p className="number">{number}</p>
      <p className="text" style={{ color: darkTheme }}>
        {text}
      </p>
    </div>
  );
};

export default SmallCard;
