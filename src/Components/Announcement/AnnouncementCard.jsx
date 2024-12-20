import React from "react";
import dots from "../../assets/carbon_overflow-menu-horizontal.png";
import "./style.css";

const AnnouncementCard = ({ heading, text, src, width }) => {
  return (
    <div className="anncard" style={{ width: width }}>
      <div className="div-1">
        <p className="heading-1">{heading}</p>
        <p className="text-1">{text}</p>
      </div>
      <div className="images">
        {src && <img src={src} />}
        <img src={dots} />
      </div>
    </div>
  );
};

export default AnnouncementCard;
