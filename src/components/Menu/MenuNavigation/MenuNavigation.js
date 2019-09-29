import React from 'react';
import classes from "./MenuNavigation.css";

import MenuItems from "./MenuItems/MenuItems";

const MenuNavigation = () => {
    return (




                <ul className={classes.MenuNavigationItems}>
                    {/*<NavigationItem link="/">Home</NavigationItem>*/}
                    <MenuItems link="/menu/starters">Starters</MenuItems>
                    <MenuItems link="/menu/salads" >Salads</MenuItems>
                    <MenuItems link="/menu/fishMainDishes" >Fish main dishes</MenuItems>
                    <MenuItems link="/menu/barbecue" >Barbecue</MenuItems>
                    <MenuItems link="/menu/hotDishes" >Hot dishes</MenuItems>
                    <MenuItems link="/menu/dessert" >Dessert</MenuItems>

                </ul>

    );
};

export default MenuNavigation;