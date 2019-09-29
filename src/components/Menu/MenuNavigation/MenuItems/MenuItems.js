import React from 'react';
import classes from "./MenuItems.css";
import {NavLink} from "react-router-dom";

const MenuItems = (props) => {
    return (
        <div>
            <li className={classes.MenuItem } >
                <NavLink
                    to={props.link}
                    exact={props.exact}
                    activeClassName={classes.active}>
                    {props.category}
                </NavLink>
            </li>
        </div>
    );
};

export default MenuItems;