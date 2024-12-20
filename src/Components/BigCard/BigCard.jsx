import React from "react";
import "./style.css";

const BigCard = ({ heading, number, text1, text2, src }) => {
  return (
    <div className="Bigcard">
      <div>
        <p className="heading1">{heading}</p>
        <p className="number1">{number}</p>
        <p className="text1">{text1}</p>
        <p className="text2">{text2}</p>
      </div>
      <div>
        <img src={src} />
      </div>
    </div>
  );
};

export default BigCard;
