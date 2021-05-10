import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="hero text-center">
        {/* style={{ backgroundImage: `url(${props.backgroundImage})` }} */}
        THIS IS A HEADER
      {props.children}
    </div>
  );
}

export default Header;