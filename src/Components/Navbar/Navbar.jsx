import React from "react";
import ic_search from "../../assets/ic_search.png";
import ic_chat from "../../assets/bi_chat-left-dots-fill.png";
import ic_roundnotifications from "../../assets/ic_round-notifications.png";
import maskGroup from "../../assets/Mask Group.png";
import arrow from "../../assets/Frame 10.png";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="searchBox">
        <input type="text" placeholder="Search" />
        <img src={ic_search} className="ic_search" />
      </div>
      <div className="userBox">
        <div>
          <img src={ic_roundnotifications} />
        </div>
        <div>
          <img src={ic_chat} />
        </div>
        <div className="user">
          <img src={maskGroup} />
          <p>Admirra John</p>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
