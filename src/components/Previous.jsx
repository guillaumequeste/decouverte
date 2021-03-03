import React from 'react';
import { NavLink } from "react-router-dom";
import arrow_prev from "../img/arrow.png";

const Previous = (props) => {
    return (
        <div className="prev">
            <NavLink to={`/${props.prev}`}>
            <img src={arrow_prev} alt="arrow_prev" className="arrow_prev" />
            </NavLink>
        </div>
    );
};

export default Previous;