import React, { Component } from 'react';

import classes from './Layout.css';
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';

import Footer from '../components/footer/Footer';
import classesContact from '../container/ContactPage/ContactPage.css';
import Toolbar from "../components/Navigation/Toolbar/Toolbar";



class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };

    render () {
        return (
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

                <NavigationBar open={this.state.showSideDrawer}
                                  closed={this.sideDrawerClosedHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>

                <Footer className={classesContact.ContactPage}/>
            </div>
        )
    }
}

export default Layout;