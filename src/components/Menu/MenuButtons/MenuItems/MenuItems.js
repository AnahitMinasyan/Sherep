import React from 'react';
import classes from "./MenuItems.css";
import {NavLink} from "react-router-dom";
import axios from "../../../../axios-orders";

const MenuItems = (props) => {

    return (
        <div>
            <li className={classes.MenuButtons} >
                <button
                    className={classes.MenuButton}
                    onClick={() => props.chooseCategory(props.menuType)}>
                    {props.children}
                </button>
            </li>
        </div>
    );
};

export default MenuItems;