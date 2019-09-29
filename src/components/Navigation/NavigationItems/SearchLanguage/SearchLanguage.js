 import React from 'react';
import classes from './SearchLanguage.css';
 import DropDownLink from "./DropDownLink/DropDownLink";



const SearchLanguage = () => {
    return (
        <div className={classes.SearchLanguage}>
            {/*<div >*/}
                {/*<p>Search</p>*/}
            {/*</div>*/}

            <div>
                <DropDownLink/>
            </div>


        </div>
    );
};

export default SearchLanguage;

