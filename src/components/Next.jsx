import React from "react";
import { NavLink } from "react-router-dom";
import arrow_next from "../img/arrow.png";

const Next = props => {
  return (
    <div className="next">
      <NavLink to={`/${props.next}`}>
        <img src={arrow_next} alt="arrow_next" className="arrow_next" />
      </NavLink>
    </div>
  );
};

export default Next;
