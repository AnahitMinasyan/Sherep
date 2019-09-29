import React from 'react';
import MenuItems from "./MenuItems/MenuItems";
import classes from './MenuButtons.css'

const MenuButtons = (props) => {
    return (
        <div className={classes.MenuButtons}>
            <MenuItems link="/menu/food" menuType={'food'} chooseCategory={(type) => props.changeType(type)}>food</MenuItems>
            <MenuItems link="/menu/drinks" menuType={'drinks'} chooseCategory={(type) => props.changeType(type)}>drinks</MenuItems>
            <MenuItems link="/menu/banquet" menuType={'banquet'} chooseCategory={(type) => props.changeType(type)}>banquet</MenuItems>
        </div>
    );
};

export default MenuButtons;