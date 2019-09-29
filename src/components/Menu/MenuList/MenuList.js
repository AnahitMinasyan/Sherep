import React from 'react';
import classes from './MenuList.css'

const MenuList = (props) => {
    return (
        <div className={classes.MenuAllList}>
            {
                props.showData ? props.showData.map(el => {
                    return (
                        <div className={classes.MenuList}>
                            <div className={classes.MenuContent}>
                                <h3>{el.title}</h3>
                                <p>{el.content}</p>
                            </div>
                            <div className={classes.MenuPrice}>
                                <p>{el.price}</p>
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>


    );
};

export default MenuList;