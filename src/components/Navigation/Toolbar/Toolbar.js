import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../NavigationBar/DrawerToggle/DrawerToggle';
import SearchLanguage from "../NavigationItems/SearchLanguage/SearchLanguage";

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.menuNavBar}>
                <SearchLanguage/>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </div>

            <DrawerToggle  clicked={props.drawerToggleClicked} />
        </header>
    );
};

export default Toolbar;