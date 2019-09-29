import React, {Component} from 'react';
import homePageImage from '../../assets/images/restaurant-background.jpg';

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage} style={{backgroundImage: `url(${homePageImage})`}}>
                <div className={classes.HomePageText}>
                    <p>
                        the taste & smell
                    </p>
                    <p>
                        of Armenia
                    </p>
                </div>
            </div>
        );
    }
}

export default HomePage;