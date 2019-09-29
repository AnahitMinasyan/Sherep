import React from 'react';
import sherepLogo from '../../assets/images/logo (1).png';
import classes from './Logo.css';
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <NavLink to='/'><img src={sherepLogo} alt="SherepLogo" /></NavLink>
        </div>
    );
};

export default Logo;