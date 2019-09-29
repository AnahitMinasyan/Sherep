import React, {Fragment} from 'react';
import classes from './NavigationBar.css';
import Backdrop from "./Backdrop/Backdrop";


const NavigationBar = (props) => {

    // const Backdrop = (props) => (
    //     props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
    //
    // );


    let attachedClasses = [classes.NavigationBar, classes.Close];
    if (props.open) {
        attachedClasses = [classes.NavigationBar, classes.Open];
    }



    return (
       <Fragment>
            <div className={attachedClasses.join(' ')}>
                <Backdrop show={props.open} clicked={props.closed}/>
            </div>
        </Fragment>
    );
};

export default NavigationBar;