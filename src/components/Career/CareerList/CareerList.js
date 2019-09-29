import React from 'react';
import classes from './CareerList.css'

const CareerList = (props) => {
    return (
        <div className={classes.CareerList}>

                        <div>
                            <h3>{props.title}</h3>
                            <p>
                                {props.content}
                            </p>
                            <p>
                                {props.date}
                            </p>
                        </div>





        </div>
    );
};

export default CareerList;