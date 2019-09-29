import React from 'react';
import classes from './Backdrop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import NavigationItems from "../../NavigationItems/NavigationItems";

const Backdrop = (props) => (
    props.show ?
        <div className={classes.Backdrop} onClick={props.clicked}>
            <div className={classes.BackdropIcon}>
                <FontAwesomeIcon icon={faAngleRight} style={{'width':'40px', 'height': '40px', 'opacity': '0.8', 'color': 'white'}}/>
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div> : null

);


export default Backdrop;