import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="branding">
        Formula1-Forms - form validations with Superstruct and React useRef.
        Writing assertions, describing shape of data structure, adding error
        messages
      </div>
      <div className="navigation">
        <Link to="/">Add F1 Constructor</Link>
      </div>
    </div>
  );
}

export default Header;
