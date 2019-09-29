import React, {useState} from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css';
import { withRouter } from 'react-router-dom';

import SearchLanguage from "./SearchLanguage/SearchLanguage";



const NavigationItems = (props) => {

    let pathname = typeof window !== 'undefined' ? window.location.pathname : null;
    //Your initialization

    const [location, setLocation] = useState(pathname);
    //Your initialization

    props.history.listen( loc =>  {
        setLocation(loc.pathname);
    });

    return (
        <div className={classes.NavigationAllItems} style={{backgroundColor: location === '/' ? 'initial' : '#000'}}>
            {/*<div>*/}
                {/*<SearchLanguage/>*/}
            {/*</div>*/}
            <ul className={classes.NavigationItems}>
                {/*<NavigationItem link="/">Home</NavigationItem>*/}
                <NavigationItem link="/about">About</NavigationItem>
                <NavigationItem link="/menu" >Menu</NavigationItem>
                <NavigationItem link="/gallery" >Gallery</NavigationItem>
                <NavigationItem link="/media" >Media</NavigationItem>
                <NavigationItem link="/news" >Events</NavigationItem>
                <NavigationItem link="/career" >Career</NavigationItem>
                <NavigationItem link="/contact" >Contact</NavigationItem>

            </ul>
        </div>

    );
};

export default withRouter(NavigationItems);